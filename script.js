const updateDateTime = () => {
	const now = new Date();

	// Update the current day of the week
	const daysOfWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const dayOfWeek = daysOfWeek[now.getUTCDay()];
	document.getElementById("dayOfWeek").textContent = dayOfWeek;

	// Update the current UTC time
	const utcTime = now.toUTCString();
	document.getElementById("utcTime").textContent = utcTime;
};

// Update the time immediately on page load
updateDateTime();

// Update the time every second (1000 milliseconds)
setInterval(updateDateTime, 1000);
