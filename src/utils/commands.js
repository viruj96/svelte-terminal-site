import { dateTimeFormatter } from "./constants";

export const commands = (/** @type {string} */ command, /** @type {Array} */ previousCommands) => {
	switch (command) {
		case 'help':
			return help();
		case 'whoami':
			return whoami();
		case 'resume':
			return resume();
		case 'projects':
			return projects();
		case 'socials':
			return socials();
		case 'history':
			return history(previousCommands);
		case 'clear':
			return clear();
		case 'github':
			return github();
		case 'linkedin':
			return linkedin();
		case 'email':
			return email();
		default:
			return invalid(command);
	}
};

export const validCommands = () => ['help', 'whoami', 'resume', 'projects', 'socials', 'history', 'clear', 'github', 'linkedin', 'email'];

const invalid = (/** @type {string} */ command) => {
	return `
		<p class="error-line"><span class="command">${command}</span> - 404: command not found.</p>
		<p>Type &lt;&lt; <span class="command">help</span> &gt;&gt; to see the list of available commands.</p><br />
	`;
};

const help = () => {
	const timestamp = new Date();
	return `
		<p>Shell version ${timestamp.getDate()}.${timestamp.getMonth() + 1}.${timestamp.getFullYear()}.</p>
		<p>List of available commands:</p>
		<div class="list">
			<div class="item"><span class="command">whoami</span>		<span class="description">Get to know me</span></div>
			<div class="item"><span class="command">resume</span>		<span class="description">View my digital resume</span></div>
			<div class="item"><span class="command">projects</span>		<span class="description">See some of the things I've done</span></div>
			<div class="item"><span class="command">socials</span>		<span class="description">How you can reach me</span></div>
			<div class="item"><span class="command">history</span>		<span class="description">See all previously executed commands</span></div>
			<div class="item"><span class="command">clear</span>		<span class="description">Clear terminal</span></div>
			<div class="item"><span class="command">help</span>			<span class="description">View all available commands</span></div>
		</div><br />
	`;
};

const whoami = () => {
	const DOB = new Date('1996-11-25');
	const NOW = new Date();
	const age = Math.floor((NOW.getTime() - DOB.getTime()) / (1000 * 3600 * 24 * 365));

	return `
		<p>Hi!</p>
		<p>My name is <em>Viruj Balasoupramanien</em>. I'm a ${age} year old Mauritian software developer and mechanical engineer.</p>
		<p>Yes! I tackle both real world and virtual world problems. Or at least I'd like to.</p>
		<p>I am currently working as a full stack developer.</p>
		<p>Being a man of science and numbers, naturally I went and studied mechanical engineering.</p>
		<p>That's when I got my first taste of pragramming through MATLAB.</p>
		<p>After completing my honours, I worked for a little under a year in a geotechnical engineering firm.</p>
		<p>There I somehow got more into IT. I was tasked with several small projects to automate simple things.</p>
		<p>With the limited programming knowledge I had, I managed to do some of them.</p>
		<p>That's when I decided I should go into IT. So I started my masters in applied software technologies.</p>
		<p>And here we now! Me creating a terminal-themed web portfolio in Svelte 😋.</p><br />
	`
};

const resume = () => {
	setTimeout(() => {
		window.open('https://viruj96.github.io/digital-resume/', '_blank');
	}, 1000);

	return '<p class="info-line">Opening resume...</p><br />';
};

const projects = () => {
	setTimeout(() => {
		window.open('https://viruj96.github.io/digital-resume/#projects', '_blank');
	}, 1000);

	return '<p class="info-line">Loading projects...</p><br />';
};

const socials = () => {
	return `
		<p class="info-line">Click the link or enter the social to open it up.</p>
		<div id="socials">
			<a href="https://github.com/viruj96/" target="_blank">GitHub</a>
			<a href="https://www.linkedin.com/in/viruj-bala-soupramanien-1883ab185/" target="_blank">LinkedIn</a>
			<a href="mailto:virujbala.96@gmail.com">Email</a>
		</div><br />
	`;
};

const history = (/** @type {Array} */ previousCommands) => {
	if (previousCommands.filter(command => command.valid).length === 0)
		return '<p class="info-line">No valid commands have been executed yet.</p><br />';

	let result = '';
	for (let entry of previousCommands) {
		if (entry.valid) {
			result += `
				<div class="item"><span>${entry.id}</span><span class="command">${entry.command}</span><span>${dateTimeFormatter.format(entry.time).split(' ').slice(-1)[0]}</span></div>
			`;
		}
	}
	return `<div class="list">${result}</div><br />`;
};

const clear = () => {
	return '<p class="info-line">Not yet implemented</p><br />';
};

const github = () => {
	setTimeout(() => {
		window.open('https://github.com/viruj96/', '_blank');
	}, 1000);

	return '<p class="info-line">Opening GitHub...</p><br />';
}

const linkedin = () => {
	setTimeout(() => {
		window.open('https://www.linkedin.com/in/viruj-bala-soupramanien-1883ab185/', '_blank');
	}, 1000);

	return '<p class="info-line">Opening LinkedIn...</p><br />';
}

const email = () => {
	setTimeout(() => {
		window.open('mailto:virujbala.96@gmail.com', '_self');
	}, 1000);

	return '<p class="info-line">Opening email...</p><br />';
}