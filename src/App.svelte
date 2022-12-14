<script>
  import { afterUpdate, onMount } from "svelte";
  import Banner from "./lib/Banner.svelte";
  import CLI from "./lib/CLI.svelte";
  import Output from "./lib/Output.svelte";
  import { command } from "./store";
  import { validCommands } from "./utils/commands";

  let main;

  afterUpdate(() => {
    main.scrollTo(0, main.scrollHeight);
  });

  let history = [];
  let handleInput;

  onMount(() => {
    $command = [
      {
        input: "",
        output: "",
      },
    ];
  });

  const onKeyDown = (/** @type {KeyboardEvent} */ event) => {
    let inputCommand = handleInput(event);
    if (inputCommand.entered) {
      const timestamp = new Date();
      let input = inputCommand.input;
      let id = history.length + 1;
      history.push({
        id,
        command: input,
        time: timestamp,
        valid: validCommands().includes(input),
      });
      command.update((prev) => {
        let last = prev.slice(-1)[0];
        let upToLast = prev.slice(0, -1);
        last.output = inputCommand.output;
        return [
          ...upToLast,
          last,
          {
            input: "",
            output: "",
          },
        ];
      });
    }
  };
</script>

<svelte:window on:keydown={onKeyDown} />

<main bind:this={main}>
  <Banner />
  {#each $command as cmd}
    <svelte:component
      this={CLI}
      bind:handleInput
      bind:input={cmd.input}
      bind:history
    />
    <svelte:component this={Output} bind:output={cmd.output} />
  {/each}
</main>

<style>
  main {
    margin: 1em;
    padding: 0 0.5em;
    height: 86vh;
    overflow-y: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;
    animation: textShadow 1.6s infinite;
  }

  main::-webkit-scrollbar {
    width: 0.1em;
  }

  main::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px var(--text-colour);
    border-radius: 3em;
  }

  main::-webkit-scrollbar-thumb {
    background-color: rgb(56, 3, 3);
    border-radius: 3em;
  }

  main::after {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgb(18, 16, 16, 0.1);
    opacity: 0;
    z-index: 2;
    pointer-events: none;
    animation: flicker 0.15s infinite;
  }

  main::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
        rgba(18, 16, 16, 0) 50%,
        rgba(0, 0, 0, 0.25) 50%
      ),
      linear-gradient(
        90deg,
        rgba(255, 0, 0, 0.06),
        rgba(0, 255, 0, 0.02),
        rgba(0, 0, 255, 0.06)
      );
    z-index: 2;
    background-size: 100% 0.1%, 0.2% 100%;
    pointer-events: none;
  }

  @keyframes flicker {
    0% {
      opacity: 0.27861;
    }

    5% {
      opacity: 0.34769;
    }

    10% {
      opacity: 0.23604;
    }

    15% {
      opacity: 0.90626;
    }

    20% {
      opacity: 0.18128;
    }

    25% {
      opacity: 0.83891;
    }

    30% {
      opacity: 0.65583;
    }

    35% {
      opacity: 0.67807;
    }

    40% {
      opacity: 0.26559;
    }

    45% {
      opacity: 0.84693;
    }

    50% {
      opacity: 0.96019;
    }

    55% {
      opacity: 0.08594;
    }

    60% {
      opacity: 0.20313;
    }

    65% {
      opacity: 0.71988;
    }

    70% {
      opacity: 0.53455;
    }

    75% {
      opacity: 0.37288;
    }

    80% {
      opacity: 0.71428;
    }

    85% {
      opacity: 0.70419;
    }

    90% {
      opacity: 0.7003;
    }

    95% {
      opacity: 0.36108;
    }

    100% {
      opacity: 0.24387;
    }
  }

  @keyframes textShadow {
    0% {
      text-shadow: 0.4389924193300864px 0 1px var(--blue-glow),
        -0.4389924193300864px 0 1px var(--red-glow), 0 0 3px;
    }

    5% {
      text-shadow: 2.7928974010788217px 0 1px var(--blue-glow),
        -2.7928974010788217px 0 1px var(--red-glow), 0 0 3px;
    }

    10% {
      text-shadow: 0.02956275843481219px 0 1px var(--blue-glow),
        -0.02956275843481219px 0 1px var(--red-glow), 0 0 3px;
    }

    15% {
      text-shadow: 0.40218538552878136px 0 1px var(--blue-glow),
        -0.40218538552878136px 0 1px var(--red-glow), 0 0 3px;
    }

    20% {
      text-shadow: 3.4794037899852017px 0 1px var(--blue-glow),
        -3.4794037899852017px 0 1px var(--red-glow), 0 0 3px;
    }

    25% {
      text-shadow: 1.6125630401149584px 0 1px var(--blue-glow),
        -1.6125630401149584px 0 1px var(--red-glow), 0 0 3px;
    }

    30% {
      text-shadow: 0.7015590085143956px 0 1px var(--blue-glow),
        -0.7015590085143956px 0 1px var(--red-glow), 0 0 3px;
    }

    35% {
      text-shadow: 3.896914047650351px 0 1px var(--blue-glow),
        -3.896914047650351px 0 1px var(--red-glow), 0 0 3px;
    }

    40% {
      text-shadow: 3.870905614848819px 0 1px var(--blue-glow),
        -3.870905614848819px 0 1px var(--red-glow), 0 0 3px;
    }

    45% {
      text-shadow: 2.231056963361899px 0 1px var(--blue-glow),
        -2.231056963361899px 0 1px var(--red-glow), 0 0 3px;
    }

    50% {
      text-shadow: 0.08084290417898504px 0 1px var(--blue-glow),
        -0.08084290417898504px 0 1px var(--red-glow), 0 0 3px;
    }

    55% {
      text-shadow: 2.3758461067427543px 0 1px var(--blue-glow),
        -2.3758461067427543px 0 1px var(--red-glow), 0 0 3px;
    }

    60% {
      text-shadow: 2.202193051050636px 0 1px var(--blue-glow),
        -2.202193051050636px 0 1px var(--red-glow), 0 0 3px;
    }

    65% {
      text-shadow: 2.8638780614874975px 0 1px var(--blue-glow),
        -2.8638780614874975px 0 1px var(--red-glow), 0 0 3px;
    }

    70% {
      text-shadow: 0.48874025155497314px 0 1px var(--blue-glow),
        -0.48874025155497314px 0 1px var(--red-glow), 0 0 3px;
    }

    75% {
      text-shadow: 1.8948491305757957px 0 1px var(--blue-glow),
        -1.8948491305757957px 0 1px var(--red-glow), 0 0 3px;
    }

    80% {
      text-shadow: 0.0833037308038857px 0 1px var(--blue-glow),
        -0.0833037308038857px 0 1px var(--red-glow), 0 0 3px;
    }

    85% {
      text-shadow: 0.09769827255241735px 0 1px var(--blue-glow),
        -0.09769827255241735px 0 1px var(--red-glow), 0 0 3px;
    }

    90% {
      text-shadow: 3.443339761481782px 0 1px var(--blue-glow),
        -3.443339761481782px 0 1px var(--red-glow), 0 0 3px;
    }

    95% {
      text-shadow: 2.1841838852799786px 0 1px var(--blue-glow),
        -2.1841838852799786px 0 1px var(--red-glow), 0 0 3px;
    }

    100% {
      text-shadow: 2.6208764473832513px 0 1px var(--blue-glow),
        -2.6208764473832513px 0 1px var(--red-glow), 0 0 3px;
    }
  }
</style>
