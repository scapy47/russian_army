<script lang="ts">
	import { GamepadDirectional } from "@lucide/svelte";
	import ScrambleRevealText from "./utils/ScrambleRevealText.svelte";

	let step = $state<"a" | "b" | "c">("a");

	async function start() {
		const t1 = document.startViewTransition(() => (step = "b"));
		await t1.finished;

		setTimeout(() => {
			document.startViewTransition(() => (step = "c"));
		}, 2000);
	}
</script>

<div>
	{#if step === "a"}
		<button
			class="expand bg-a2 dark:bg-a10 h-full p-2 w-48 bevel rounded-br-2xl rounded-tl-2xl"
			onclick={start}>Start</button
		>
	{:else if step === "b"}
		<section class="absolute inset-0 flex justify-center max-h-svh">
			<div
				class="expand w-full fill md:w-11/12 h-4/5 mt-10 bevel rounded-br-4xl rounded-tl-4xl border-4 border-a2 dark:border-a10 p-6 grid overflow-clip"
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
			</div>
		</section>
	{:else}
		<section class="absolute inset-0 flex justify-center max-h-svh">
			<div
				class="expand w-full h-full bevel rounded-br-4xl rounded-tl-4xl border-8 border-a2 dark:border-a10 p-6 grid overflow-clip backdrop-blur-3xl
"
			></div>
		</section>
	{/if}
</div>

<style>
	.expand {
		view-transition-name: expand;
	}
</style>
