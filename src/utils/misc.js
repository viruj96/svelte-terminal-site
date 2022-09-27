export const convertTime = (/** @type {Date} */ timestamp) => {
	let hour = timestamp.getHours();
	let mins = `${timestamp.getMinutes()}`;
	let secs = `${timestamp.getSeconds()}`;

	if (mins.length < 2)
		mins = `0${mins}`;
	if (secs.length < 2)
		secs = `0${secs}`;

	return `${hour}:${mins.substring(-2)}:${secs.substring(-2)}`;
}
