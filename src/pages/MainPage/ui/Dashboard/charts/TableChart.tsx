import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

export const TableChart = ({ statistics }) => {
	const ref = useRef();

	const drawBarChart = (data, chartId, title) => {
		const margin = { top: 20, right: 30, bottom: 40, left: 40 };
		const width = 400 - margin.left - margin.right;
		const height = 300 - margin.top - margin.bottom;

		const svg = d3
			.select(ref.current)
			.append("svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")
			.attr("transform", `translate(${margin.left},${margin.top})`);

		const x = d3
			.scaleBand()
			.domain(data.map((d) => d.name))
			.range([0, width])
			.padding(0.1);

		const y = d3
			.scaleLinear()
			.domain([0, d3.max(data, (d) => d.value)])
			.range([height, 0]);

		svg.append("g").attr("class", "x-axis").attr("transform", `translate(0, ${height})`).call(d3.axisBottom(x));

		svg.append("g").attr("class", "y-axis").call(d3.axisLeft(y));

		svg
			.selectAll(".bar")
			.data(data)
			.enter()
			.append("rect")
			.attr("class", "bar")
			.attr("x", (d) => x(d.name))
			.attr("y", (d) => y(d.value))
			.attr("width", x.bandwidth())
			.attr("height", (d) => height - y(d.value))
			.attr("fill", "#4CAF50"); // Change to your desired color
	};

	useEffect(() => {
		// Prepare data for each chart
		const recordsPerClinicData = Object.entries(statistics.recordsPerClinic).map(([name, value]) => ({ name, value }));
		const recordsPerDoctorData = Object.entries(statistics.recordsPerDoctor).map(([name, value]) => ({ name, value }));
		const monthlyRecordsData = Object.entries(statistics.monthlyRecords).map(([name, value]) => ({ name, value }));

		// Clear previous charts
		d3.select(ref.current).selectAll("*").remove();

		// Draw each chart
		drawBarChart(recordsPerClinicData, "clinicChart", "Records per Clinic");
		drawBarChart(recordsPerDoctorData, "doctorChart", "Records per Doctor");
		drawBarChart(monthlyRecordsData, "monthlyChart", "Monthly Records");
	}, [statistics]);

	return (
		<div ref={ref}>
			<h2>Statistics</h2>
			<h3>Records per Clinic</h3>
			<h3>Records per Doctor</h3>
			<h3>Monthly Records</h3>
		</div>
	);
};
