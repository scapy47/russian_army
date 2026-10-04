<script lang="ts">
	import { GamepadDirectional } from "@lucide/svelte";
	import ScrambleRevealText from "./utils/ScrambleRevealText.svelte";
	import Button from "./utils/Button.svelte";
	import TermDialog from "./utils/TermDialog.svelte";

	let step = $state<"a" | "b" | "c">("a");

	async function start() {
		const t1 = document.startViewTransition(() => (step = "b"));
		await t1.finished;

		setTimeout(() => {
			document.startViewTransition(() => (step = "c"));
		}, 2000);
	}
</script>

<div class="root">
	{#if step === "a"}
		<Button class="expand w-48" fn={start}>start</Button>
	{:else if step === "b"}
		<TermDialog
			class="expand w-full md:w-11/12 h-4/5 mt-10 border-4 grid"
		>
			<p class="text-9xl hidden lg:block">
				<ScrambleRevealText
					text="let's begin!"
					animateOnLoad
				/>
			</p>
			<p class="lg:hidden text-8xl">
				<ScrambleRevealText
					text="let's"
					animateOnLoad
				/>
				<ScrambleRevealText
					text="begin!"
					animateOnLoad
				/>
			</p>

			<div class=" flex justify-center items-center">
				<GamepadDirectional
					class="animate-ping w-32 h-32"
				/>
			</div>
		</TermDialog>
	{:else}
		<TermDialog
			class="expand w-full h-full border-8
"
		></TermDialog>
	{/if}
</div>

<style>
	.root :global(.expand) {
		view-transition-name: expand;
	}
</style>
