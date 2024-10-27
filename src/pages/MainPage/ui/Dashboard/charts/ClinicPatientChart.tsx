import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Typography } from "antd";

interface TableRecord {
	clinicOffice: { id: string; officeNumber?: string | null };
}

interface ClinicPatientChartProps {
	tables: TableRecord[];
}

export const ClinicPatientChart: React.FC<ClinicPatientChartProps> = ({ tables }) => {
	const svgRef = useRef<SVGSVGElement | null>(null);

	useEffect(() => {
		if (!tables.length) return;

		const clinicPatientCount = d3.rollups(
			tables,
			(v) => v.length,
			(d) => d.clinicOffice.officeNumber || "Неизвестный офис",
		);

		const svg = d3.select(svgRef.current);
		const width = 600;
		const height = 400;
		const margin = { top: 50, right: 30, bottom: 70, left: 60 };

		const x = d3
			.scaleBand()
			.domain(clinicPatientCount.map((d) => d[0]))
			.range([margin.left, width - margin.right])
			.padding(0.3);

		const y = d3
			.scaleLinear()
			.domain([0, d3.max(clinicPatientCount, (d) => d[1]) || 0])
			.nice()
			.range([height - margin.bottom, margin.top]);

		svg.selectAll("*").remove();

		// Оси
		svg
			.append("g")
			.attr("transform", `translate(0,${height - margin.bottom})`)
			.call(d3.axisBottom(x))
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

		// Подсказка (tooltip)
		const tooltip = d3
			.select("body")
			.append("div")
			.style("position", "absolute")
			.style("background", "#333")
			.style("color", "#fff")
			.style("padding", "5px 10px")
			.style("border-radius", "5px")
			.style("opacity", 0);

		// Столбцы с анимацией и интерактивностью
		svg
			.append("g")
			.selectAll("rect")
			.data(clinicPatientCount)
			.enter()
			.append("rect")
			.attr("x", (d) => x(d[0]) || 0)
			.attr("y", height - margin.bottom)
			.attr("height", 0)
			.attr("width", x.bandwidth())
			.attr("fill", "#4a90e2")
			.on("mouseover", (event, d) => {
				tooltip.transition().duration(200).style("opacity", 1);
				tooltip
					.html(`Офис: ${d[0]}<br>Пациентов: ${d[1]}`)
					.style("left", `${event.pageX + 10}px`)
					.style("top", `${event.pageY - 20}px`);
			})
			.on("mouseout", () => {
				tooltip.transition().duration(200).style("opacity", 0);
			})
			.transition()
			.duration(800)
			.attr("y", (d) => y(d[1]))
			.attr("height", (d) => y(0) - y(d[1]));
	}, [tables]);

	return (
		<div>
			<Typography className="text-xl font-bold">Количество пациентов по клиникам</Typography>
			<svg ref={svgRef} width={600} height={400} style={{ background: "transparent" }} />
		</div>
	);
};
