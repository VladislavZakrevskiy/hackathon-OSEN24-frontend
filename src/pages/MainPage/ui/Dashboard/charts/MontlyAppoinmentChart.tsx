import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import moment from "moment";
import { Typography } from "antd";

interface TableRecord {
	beginDate: string;
}

interface MonthlyAppointmentsChartProps {
	tables: TableRecord[];
}

export const MonthlyAppointmentsChart: React.FC<MonthlyAppointmentsChartProps> = ({ tables }) => {
	const svgRef = useRef<SVGSVGElement | null>(null);

	useEffect(() => {
		if (!tables.length) return;

		const monthlyAppointments = d3.rollups(
			tables,
			(v) => v.length,
			(d) => moment(d.beginDate).format("YYYY-MM"),
		);

		monthlyAppointments.sort((a, b) => moment(a[0]).diff(moment(b[0])));

		const svg = d3.select(svgRef.current);
		const width = 600;
		const height = 400;
		const margin = { top: 50, right: 30, bottom: 70, left: 60 };

		const x = d3
			.scalePoint()
			.domain(monthlyAppointments.map((d) => d[0]))
			.range([margin.left, width - margin.right]);

		const y = d3
			.scaleLinear()
			.domain([0, d3.max(monthlyAppointments, (d) => d[1]) || 0])
			.nice()
			.range([height - margin.bottom, margin.top]);

		svg.selectAll("*").remove();
		svg.style("background-color", "transparent");

		svg
			.append("g")
			.attr("transform", `translate(0,${height - margin.bottom})`)
			.call(d3.axisBottom(x).tickSizeOuter(0))
			.selectAll("text")
			.attr("transform", "rotate(-45)")
			.style("text-anchor", "end")
			.style("fill", "#ffffff");

		svg
			.append("g")
			.attr("transform", `translate(${margin.left},0)`)
			.call(d3.axisLeft(y))
			.selectAll("text")
			.style("fill", "#ffffff");

		const line = d3
			.line<[string, number]>()
			.x((d) => x(d[0]) || 0)
			.y((d) => y(d[1]));

		svg
			.append("path")
			.datum(monthlyAppointments)
			.attr("fill", "none")
			.attr("stroke", "#ff9800")
			.attr("stroke-width", 2)
			.attr("d", line as any)
			.attr("stroke-dasharray", function () {
				const length = this.getTotalLength();
				return `${length} ${length}`;
			})
			.attr("stroke-dashoffset", function () {
				return this.getTotalLength();
			})
			.transition()
			.duration(1000)
			.attr("stroke-dashoffset", 0);

		const tooltip = d3
			.select("body")
			.append("div")
			.style("position", "absolute")
			.style("background", "#333")
			.style("color", "#fff")
			.style("padding", "5px 10px")
			.style("border-radius", "5px")
			.style("opacity", 0);

		svg
			.selectAll("circle")
			.data(monthlyAppointments)
			.enter()
			.append("circle")
			.attr("cx", (d) => x(d[0]) || 0)
			.attr("cy", (d) => y(d[1]))
			.attr("r", 4)
			.attr("fill", "#ff9800")
			.on("mouseover", (event, d) => {
				tooltip.transition().duration(200).style("opacity", 1);
				tooltip
					.html(`Месяц: ${d[0]}<br>Приемов: ${d[1]}`)
					.style("left", `${event.pageX + 10}px`)
					.style("top", `${event.pageY - 20}px`);
			})
			.on("mouseout", () => {
				tooltip.transition().duration(200).style("opacity", 0);
			});
	}, [tables]);

	return (
		<div>
			<Typography className="text-xl font-bold">Количество приемов по месяцам</Typography>
			<svg ref={svgRef} width={600} height={400} style={{ background: "transparent" }} />
		</div>
	);
};
