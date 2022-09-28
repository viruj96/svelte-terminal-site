<script>
	import { commands } from "../utils/commands";
	import { hostname, username } from "../utils/constants";
	import Output from "./Output.svelte";

	export let history;
	export let input = "";
	let output = "";
	let commandEntered = false;

	export const handleInput = (/** @type {KeyboardEvent} */ event) => {
		if (event.key === "Enter") {
			output = commands(input, history);
			commandEntered = true;
			return commandEntered;
		} else if (event.code >= "KeyA" && event.code <= "KeyZ") {
			input += event.key;
		} else if (event.code === "Backspace") {
			input = input.slice(0, -1);
		}
	};
</script>

<div id="input">
	<div id="user">
		<span id="username">{username}</span>
		<span id="hostname">{hostname}</span>
	</div>
	<div id="cursor">
		<span id={commandEntered ? "faux-command" : "faux-input"}>{input}</span>
	</div>
</div>
{#if output !== ""}
	<Output bind:output />
{/if}

<style>
	#input {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}

	#user {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
	}

	#username {
		color: var(--user-colour);
	}

	#hostname {
		color: var(--host-colour);
	}

	#hostname::before {
		content: "@";
		color: var(--text-colour);
	}

	#hostname::after {
		content: ":";
		color: var(--text-colour);
	}

	#cursor {
		display: flex;
		position: relative;
		width: 100%;
		color: var(--misc-colour);
	}

	#cursor::before {
		content: "~$";
	}

	#faux-input,
	#faux-command {
		display: flex;
		color: var(--misc-colour);
		margin-left: 1%;
	}

	#faux-input::after {
		content: "▮";
		font-size: 0.7em;
		background: var(--misc-colour);
		display: inline-block;
		animation: blink 1.5s steps(2) infinite;
		margin: auto 0;
	}

	@keyframes blink {
		0% {
			opacity: 0;
		}
	}

	@-webkit-keyframes blink {
		0% {
			opacity: 0;
		}
	}
</style>
