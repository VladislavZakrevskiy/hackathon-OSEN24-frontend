export function generateRandomTime() {
	const hours = String(Math.floor(Math.random() * 24)).padStart(2, "0");
	const minutes = String(Math.floor(Math.random() * 60)).padStart(2, "0");
	const seconds = String(Math.floor(Math.random() * 60)).padStart(2, "0");
	const milliseconds = String(Math.floor(Math.random() * 1000)).padStart(3, "0");

	return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
