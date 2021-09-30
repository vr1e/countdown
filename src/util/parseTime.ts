interface IFormattedTime {
	hours: number;
	minutes: number;
	seconds: number;
	deciseconds: number;
}

export default function parseTime(time: number): IFormattedTime {
	const formattedTime = {
		hours: Math.floor((time / (60 * 60 * 10)) % 60),
		minutes: Math.floor((time / (60 * 10)) % 60),
		seconds: Math.floor((time / 10) % 60),
		deciseconds: time % 10,
	};
	return formattedTime;
}
