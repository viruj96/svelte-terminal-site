<script>
	import { readable } from "svelte/store";

	const loadTime = window.performance.now();

	const today = readable(new Date(), function start(set) {
		const interval = setInterval(() => {
			set(new Date());
		}, 1000);

		return function stop() {
			clearInterval(interval);
		};
	});

	const formatter = new Intl.DateTimeFormat("en", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
		hour: "numeric",
		minute: "2-digit",
		second: "2-digit",
	});
</script>

<div>
	<div id="banner">
		<pre>
 ___      ___ ___  ________  ___  ___        ___     
|\  \    /  /|\  \|\   __  \|\  \|\  \      |\  \    
\ \  \  /  / | \  \ \  \|\  \ \  \\\  \     \ \  \   
 \ \  \/  / / \ \  \ \   _  _\ \  \\\  \  __ \ \  \  
  \ \    / /   \ \  \ \  \\  \\ \  \\\  \|\  \\_\  \ 
   \ \__/ /     \ \__\ \__\\ _\\ \_______\ \________\
    \|__|/       \|__|\|__|\|__|\|_______|\|________|
		</pre>
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
	<br />
	<p>Terminal Portfolio</p>
	<p>Loading system profiles took {Math.round(loadTime)} ms.</p>
	<p>All up to date - {formatter.format($today)}</p>
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
		font-size: 0.69vw;
	}

	pre {
		font-family: "Courier New", Courier, monospace;
	}
</style>
