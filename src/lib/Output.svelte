<script>
	export let output = "";
</script>

{#if output !== ""}
	<div>
		{@html output}
	</div>
{/if}

<style>
	div {
		margin-top: 1%;
	}
</style>
