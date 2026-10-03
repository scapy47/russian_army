<script lang="ts">
  import { onMount, onDestroy } from "svelte";
	
	let { text, className, id, animateOnLoad, tag = "span" } = $props();

let txt = $state(text);
	
	let start = 0x0061;
	let end = 0x007A; 

	const charVec = (() => {
		const arr: string[] = [];
		for (let i = start; i < end; i++) {
			arr.push(String.fromCharCode(i));
		}
		return arr;
	})(); 

	let runCount = 0;
	let intervalRef: ReturnType<typeof setInterval> | null = null;

	function animation() {

		console.log("triggered"); 
		
		if (!intervalRef) {
			intervalRef = setInterval(() => {
				txt = text
					.split("")
					.map((char: string , index: number) => {
						if (index < runCount) return char;
						return charVec[Math.floor(Math.random() * charVec.length)];
					})
					.join("");

				console.log("txt:", txt);

				runCount += 1 / 3;

				if (runCount >= text.length) {
					clearInterval(intervalRef!);
					intervalRef = null;
					runCount = 0;
				}
			}, 30);
		}
	}

	onMount(() => {
		if (animateOnLoad) animation();
	});

	onDestroy(() => {
		if (intervalRef) clearInterval(intervalRef);
	});
</script>

<!-- <svelte:element
	this={tag}
	class={className}
	id={id}
	on:click={animation}
	on:mouseenter={animation}
	on:mouseover={animation}
	on:mouseleave={animation}
	on:touchstart={animation}
	on:touchend={animation}
>
	{txt}
</svelte:element> -->

<svelte:element
	this={tag}
	class={className}
	id={id}
	on:click={animation}
	on:mouseenter={animation}
	on:focus={animation}
	on:touchstart={animation}
>
	{txt}
</svelte:element>