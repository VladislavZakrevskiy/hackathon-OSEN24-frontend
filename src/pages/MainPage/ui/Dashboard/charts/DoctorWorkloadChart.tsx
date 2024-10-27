import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Typography } from "antd";

interface TableRecord {
	clinicDoctor: {
		id: string;
		doctor: {
			entity?: {
				person: {
					entity?: {
						firstName: string;
						lastName: string;
					};
				};
			};
		};
	};
}

interface DoctorWorkloadChartProps {
	tables: TableRecord[];
}

export const DoctorWorkloadChart: React.FC<DoctorWorkloadChartProps> = ({ tables }) => {
	const svgRef = useRef<SVGSVGElement | null>(null);

	useEffect(() => {
		if (!tables.length) return;

		// Подготовка данных: используем имена врачей
		const doctorWorkload = d3.rollups(
			tables,
			(v) => v.length,
			(d) =>
				d.clinicDoctor.doctor.entity?.person.entity
					? `${d.clinicDoctor.doctor.entity.person.entity.firstName} ${d.clinicDoctor.doctor.entity.person.entity.lastName}`
					: "Неизвестный врач",
		);

		const svg = d3.select(svgRef.current);
		const width = 600;
		const height = 400;
		const radius = Math.min(width, height) / 2;

		const color = d3
			.scaleOrdinal()
			.domain(doctorWorkload.map((d) => d[0]))
			.range(d3.schemeDark2);

		const arc = d3.arc().innerRadius(0).outerRadius(radius);
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
			.data(pie(doctorWorkload))
			.enter()
			.append("path")
			.attr("d", arc as any)
			.attr("fill", (d) => color(d.data[0]))
			.attr("stroke", "#1e1e1e")
			.attr("stroke-width", 2)
			.on("mouseover", (event, d) => {
				tooltip.transition().duration(200).style("opacity", 1);
				tooltip
					.html(`Врач: ${d.data[0]}<br>Приемов: ${d.data[1]}`)
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
			<Typography className="text-xl font-bold">Загрузка врачей</Typography>
			<svg ref={svgRef} width={600} height={400} style={{ background: "transparent" }} />
		</div>
	);
};
