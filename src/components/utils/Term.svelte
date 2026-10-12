<script lang="ts">
	import { type Snippet } from "svelte";
	import type { ClassValue } from "svelte/elements";

	type Props = {
		children?: Snippet;
		class?: ClassValue;
		open?: boolean;
	};

	let { children, class: classvalue, open = false }: Props = $props();

	let dialog: HTMLDialogElement;
</script>

<div
	class="bevel rounded-br-4xl rounded-tl-4xl border-a2 dark:border-a10 py-6 overflow-clip backdrop-blur-xl {classvalue}"
>
	{@render children?.()}
</div>
