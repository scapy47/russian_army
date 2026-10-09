<script lang="ts">
	import { onMount, type Snippet } from "svelte";
	import type { ClassValue } from "svelte/elements";

	type Props = {
		children?: Snippet;
		class?: ClassValue;
	};

	let { children, class: classvalue }: Props = $props();

	let dialog: HTMLDialogElement;
	onMount(() => dialog.showModal());
</script>

<dialog
class="w-full h-full max-w-none max-h-none flex justify-center items-cente bg-transparent"
	bind:this={dialog}
>
	<div
		class="bevel rounded-br-4xl rounded-tl-4xl border-a2 dark:border-a10 py-6 overflow-clip backdrop-blur-3xl {classvalue}"
	>
		{@render children?.()}
	</div>
</dialog>
