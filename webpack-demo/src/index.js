import _ from "lodash";

function component() {
	const element = document.createElement("div");

	// Lodash, now imported by this script
	element.innerHTML = _.join(["Hello", "webpack"], " ");

	return element;
}

document.body.appendChild(component());

import Chart from "chart.js/auto"; // Import Chart.js
import data from "./data.json";

const labels = data.courses.map((course) => course.name);
const hypeData = data.courses.map((course) => course.hype);

const ctx = document.getElementById("hypeChart").getContext("2d");
const hypeChart = new Chart(ctx, {
	type: "bar", // Choose the chart type (e.g., 'bar', 'line', etc.)
	data: {
		labels: labels,
		datasets: [
			{
				label: "Hype Level",
				backgroundColor: "rgba(75, 192, 192, 0.2)",
				borderColor: "rgba(75, 192, 192, 1)",
				borderWidth: 1,
				data: hypeData,
			},
		],
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
});
