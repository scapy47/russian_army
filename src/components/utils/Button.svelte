<script lang="ts">
	import type { Snippet } from "svelte";
	import type { ClassValue } from "svelte/elements";

	type Props = {
		fn: (e: MouseEvent) => void;
		class?: ClassValue;
		children: Snippet;
	};
	let { fn, class: classValue = "", children, ...rest }: Props = $props();
</script>

<button
	class="{classValue} bg-a2 dark:bg-a10 p-2 bevel rounded-br-2xl rounded-tl-2xl"
	onclick={fn}
	{...rest}
>
	{@render children?.()}
</button>
