<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import type { SvelteHTMLElements } from "svelte/elements";

	type props = {
		text: string;
		className?: string;
		id?: string;
		animateOnLoad?: boolean;
		tag?: keyof SvelteHTMLElements;
	};

	let {
		text,
		className,
		id,
		animateOnLoad,
		tag = "span",
	}: props = $props();

	// svelte-ignore state_referenced_locally
	let txt = $state(text);

	let start = 0x0061;
	let end = 0x007a;

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
					.map((char: string, index: number) => {
						if (index < runCount)
							return char;
						return charVec[
							Math.floor(
								Math.random() *
									charVec.length,
							)
						];
					})
					.join("");

				// console.log("txt:", txt);

				runCount += 1 / 3;

				if (runCount >= text.length) {
					clearInterval(intervalRef!);
					intervalRef = null;
					runCount = 0;
				}
			}, 20);
		}
	}

	onMount(() => {
		if (animateOnLoad) animation();
	});

	onDestroy(() => {
		if (intervalRef) clearInterval(intervalRef);
	});
</script>

<svelte:element
	this={tag}
	role="presentation"
	class={className}
	{id}
	onclick={animation}
	onmouseenter={animation}
	onfocus={animation}
	ontouchstart={animation}
>
	{txt}
</svelte:element>

