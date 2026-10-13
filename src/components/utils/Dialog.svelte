<script lang="ts">
	import { onMount, type Snippet } from "svelte";
	import type { ClassValue } from "svelte/elements";

	type Props = {
		children?: Snippet;
		class?: ClassValue;
		open?: boolean;
		close?: () => {};
	};

	let {
		children,
		class: classvalue,
		open = false,
		close,
	}: Props = $props();

	let dialog: HTMLDialogElement;

	$effect(() => {
		if (open) dialog.showModal();
		else if (dialog.open) dialog.close();
	});

	const controler = new AbortController();
	const { signal } = controler;

	onMount(() => {
		dialog.addEventListener(
			"cancel",
			(e) => {
				e.preventDefault();
				if (dialog.returnValue === "cancel") {
					close?.();
				}
			},
			{ signal },
		);

		return () => controler.abort();
	});
</script>

<dialog
	class:h-full={open}
	class="h-fit flex absolute w-full max-w-none max-h-none justify-center items-center bg-transparent {classvalue}"
	bind:this={dialog}
>
	{@render children?.()}
</dialog>
