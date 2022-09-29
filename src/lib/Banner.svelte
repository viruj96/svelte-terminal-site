<script>
	import { onMount } from "svelte";
	import { today } from "../store";
	import { dateTimeFormatter } from "../utils/constants";

	let banner;
	let fontSize;
	const viewports = [
		{
			width: 1300,
			match: false,
			fontSize: 0.67,
		},
		{
			width: 1100,
			match: false,
			fontSize: 0.66,
		},
		{
			width: 960,
			match: false,
			fontSize: 0.65,
		},
		{
			width: 850,
			match: false,
			fontSize: 0.64,
		},
		{
			width: 765,
			match: false,
			fontSize: 0.63,
		},
		{
			width: 690,
			match: false,
			fontSize: 0.62,
		},
		{
			width: 630,
			match: false,
			fontSize: 0.73,
		},
		{
			width: 425,
			match: false,
			fontSize: 0.9,
		},
		{
			width: 410,
			match: false,
			fontSize: 0.8,
		},
	];

	const setFontSize = () => {
		viewports.forEach((vp) => {
			vp.match = window.matchMedia(`(max-width: ${vp.width}px`).matches;
		});
		let viewport = viewports.filter((vp) => vp.match);
		if (viewport.length === 0) {
			fontSize = 0.68;
		} else {
			fontSize = viewport.slice(-1)[0].fontSize;
		}
		banner.style.setProperty("font-size", `${fontSize}vw`);
	};

	onMount(() => {
		setFontSize();
	});

	const loadTime = window.performance.now();
</script>

<svelte:window on:resize={setFontSize} />

<div>
	<div id="banner" bind:this={banner}>
		<pre>
 ___      ___ ___  ________  ___  ___        ___     
|\  \    /  /|\  \|\   __  \|\  \|\  \      |\  \    
\ \  \  /  / | \  \ \  \|\  \ \  \\\  \     \ \  \   
 \ \  \/  / / \ \  \ \   _  _\ \  \\\  \  __ \ \  \  
  \ \    / /   \ \  \ \  \\  \\ \  \\\  \|\  \\_\  \ 
   \ \__/ /     \ \__\ \__\\ _\\ \_______\ \________\
    \|__|/       \|__|\|__|\|__|\|_______|\|________|
		</pre>
		<div id="surname">
			<pre>
 ________  ________  ___       ________     
|\   __  \|\   __  \|\  \     |\   __  \    
\ \  \|\ /\ \  \|\  \ \  \    \ \  \|\  \   
 \ \   __  \ \   __  \ \  \    \ \   __  \  
  \ \  \|\  \ \  \ \  \ \  \____\ \  \ \  \ 
   \ \_______\ \__\ \__\ \_______\ \__\ \__\
    \|_______|\|__|\|__|\|_______|\|__|\|__|
			</pre>
			<pre>
 ________  ________  ___  ___  ________  ________  ________  _____ ______   ________  ________   ___  _______   ________      
|\   ____\|\   __  \|\  \|\  \|\   __  \|\   __  \|\   __  \|\   _ \  _   \|\   __  \|\   ___  \|\  \|\  ___ \ |\   ___  \    
\ \  \___|\ \  \|\  \ \  \\\  \ \  \|\  \ \  \|\  \ \  \|\  \ \  \\\__\ \  \ \  \|\  \ \  \\ \  \ \  \ \   __/|\ \  \\ \  \   
 \ \_____  \ \  \\\  \ \  \\\  \ \   ____\ \   _  _\ \   __  \ \  \\|__| \  \ \   __  \ \  \\ \  \ \  \ \  \_|/_\ \  \\ \  \  
  \|____|\  \ \  \\\  \ \  \\\  \ \  \___|\ \  \\  \\ \  \ \  \ \  \    \ \  \ \  \ \  \ \  \\ \  \ \  \ \  \_|\ \ \  \\ \  \ 
    ____\_\  \ \_______\ \_______\ \__\    \ \__\\ _\\ \__\ \__\ \__\    \ \__\ \__\ \__\ \__\\ \__\ \__\ \_______\ \__\\ \__\
   |\_________\|_______|\|_______|\|__|     \|__|\|__|\|__|\|__|\|__|     \|__|\|__|\|__|\|__| \|__|\|__|\|_______|\|__| \|__|
   \|_________|                                                                                                               
			</pre>
		</div>
	</div>
	<br />
	<p>Terminal Portfolio</p>
	<p>
		DOM content loaded in <span class="info-line"
			>{Math.round(loadTime)} ms</span
		>.
	</p>
	<p>{dateTimeFormatter.format($today)}</p>
	<br />
	<p class="info-line">
		For the best experience, open the terminal in a chromium-based browser.
	</p>
	<br />
	<p>
		Type &lt;&lt; <span class="command">help</span> &gt;&gt; to see the list
		of available commands.
	</p>
	<br />
</div>

<style>
	#banner {
		display: flex;
		flex-direction: row;
		margin-bottom: -2%;
	}

	pre {
		font-family: "Courier New", Courier, monospace;
		animation: colourchange 20s infinite alternate;
	}

	#surname {
		display: flex;
		flex-direction: row;
	}

	@keyframes colourchange {
		0% {
			color: var(--text-colour);
		}
		25% {
			color: var(--info-colour);
		}
		50% {
			color: var(--link-colour);
		}
		75% {
			color: var(--misc-colour);
		}
		100% {
			color: var(--user-colour);
		}
	}

	@media (max-width: 630px) {
		#surname {
			flex-direction: column;
		}
	}

	@media (max-width: 520px) {
		#banner {
			flex-direction: column;
		}
		#surname {
			flex-direction: row;
		}
	}

	@media (max-width: 425px) {
		#surname {
			flex-direction: column;
		}
	}
</style>
