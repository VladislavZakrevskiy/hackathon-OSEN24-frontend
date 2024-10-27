import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Typography } from "antd";

interface TableRecord {
	clinicOffice: {
		officeNumber?: string | null;
	};
}

interface OfficeAppointmentsChartProps {
	tables: TableRecord[];
}

export const OfficeAppointmentsChart: React.FC<OfficeAppointmentsChartProps> = ({ tables }) => {
	const svgRef = useRef<SVGSVGElement | null>(null);

	useEffect(() => {
		if (!tables.length) return;

		// Подготовка данных: используем название офиса
		const officeAppointments = d3.rollups(
			tables,
			(v) => v.length,
			(d) => d.clinicOffice.officeNumber || "Неизвестный офис",
		);

		const svg = d3.select(svgRef.current);
		const width = 600;
		const height = 400;
		const radius = Math.min(width, height) / 2;

		const color = d3
			.scaleOrdinal()
			.domain(officeAppointments.map((d) => d[0]))
			.range(d3.schemeSet3);

		const arc = d3
			.arc()
			.innerRadius(radius / 2)
			.outerRadius(radius);
		const pie = d3.pie<[string, number]>().value((d) => d[1]);

		svg.selectAll("*").remove();
		svg.style("background-color", "transparent");

		const g = svg.append("g").attr("transform", `translate(${width / 2},${height / 2})`);

		const tooltip = d3
			.select("body")
			.append("div")
			.style("position", "absolute")
			.style("background", "#333")
			.style("color", "#fff")
			.style("padding", "5px 10px")
			.style("border-radius", "5px")
			.style("opacity", 0);

		const path = g
			.selectAll("path")
			.data(pie(officeAppointments))
			.enter()
			.append("path")
			.attr("d", arc as any)
			.attr("fill", (d) => color(d.data[0]))
			.attr("stroke", "#1e1e1e")
			.attr("stroke-width", 2)
			.on("mouseover", (event, d) => {
				tooltip.transition().duration(200).style("opacity", 1);
				tooltip
					.html(`Офис: ${d.data[0]}<br>Приемов: ${d.data[1]}`)
					.style("left", `${event.pageX + 10}px`)
					.style("top", `${event.pageY - 20}px`);
			})
			.on("mouseout", () => {
				tooltip.transition().duration(200).style("opacity", 0);
			})
			.transition()
			.duration(1000)
			.attrTween("d", function (d) {
				const i = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
				return (t) => arc(i(t)) as string;
			});
	}, [tables]);

	return (
		<div>
			<Typography className="text-xl font-bold">Количество приемов по офисам</Typography>
			<svg ref={svgRef} width={600} height={400} style={{ background: "transparent" }} />
		</div>
	);
};
