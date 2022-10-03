export const username = 'viruj';
export const hostname = 'portfolio';
export const dateTimeFormatter = new Intl.DateTimeFormat("en", {
	day: "2-digit",
	month: "2-digit",
	year: "numeric",
	hour12: false,
	hour: "numeric",
	minute: "2-digit",
	second: "2-digit",
	weekday: "long",
});
export const playSound = (key) => {
	const dirPath = 'src/assets/sounds/';
	let sound;
	if (key === 'Enter') {
		sound = dirPath + 'enter.wav';
	} else if (key === 'Backspace') {
		sound = dirPath + 'backspace.wav';
	} else {
		const sounds = [];
		for (let i = 0; i < 3; i++) {
			sounds.push(`${dirPath}key${i + 1}.mp3`);
		}
		sound = sounds[Math.floor(Math.random() * sounds.length)];
	}
	const audio = new Audio(sound);
	audio.play();
};