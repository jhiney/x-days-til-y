export default function dateDiff(date1, date2) {
	var d1 = new Date(date1);
	var d2 = new Date(date2);
	let difInTime = d1.getTime() - d2.getTime();
	let difference = difInTime / (1000 * 3600 * 24);
	return Math.round(difference);
}
