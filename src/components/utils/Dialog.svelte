<script lang="ts">
	import { onMount, type Snippet } from "svelte";
	import type { ClassValue } from "svelte/elements";

	type Props = {
		children?: Snippet;
		class?: ClassValue;
		open?: boolean;
	};

	let { children, class: classvalue, open = false }: Props = $props();

	let dialog: HTMLDialogElement;

	$effect(() => {
		if (open) dialog.showModal();
		else if (dialog.open) dialog.close();
	});
</script>

<dialog
	class:flex={open}
	class="contents absolute w-full h-full max-w-none max-h-none justify-center items-cente bg-transparent {classvalue}"
	bind:this={dialog}
>
	{@render children?.()}
</dialog>
