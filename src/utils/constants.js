import BackspaceSound from '../assets/sounds/backspace.wav';
import EnterSound from '../assets/sounds/enter.wav';
import Key1Sound from '../assets/sounds/key1.mp3';
import Key2Sound from '../assets/sounds/key2.mp3';
import Key3Sound from '../assets/sounds/key3.mp3';

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
export const playSound = (/** @type {string} */ key) => {
	const dirPath = 'src/assets/sounds/';
	let sound;
	if (key === 'Enter') {
		sound = EnterSound;
	} else if (key === 'Backspace') {
		sound = BackspaceSound;
	} else {
		const sounds = [Key1Sound, Key2Sound, Key3Sound];
		sound = sounds[Math.floor(Math.random() * sounds.length)];
	}
	const audio = new Audio(sound);
	audio.play();
};