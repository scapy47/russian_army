<script lang="ts">
	import { GamepadDirectional } from "@lucide/svelte";
    import ScrambleRevealText from "./utils/ScrambleRevealText.svelte";

	let open = false;

	function start() {
		document.startViewTransition(() => {
			open = true;
			setTimeout(() => {
				open = false;
				window.location.assign("/quiz");
			}, 2000);
		});
	}
</script>

<div>
	{#if !open}
		<button
			class="bg-a2 dark:bg-a10 h-full p-2 w-48 expand bevel rounded-br-2xl rounded-tl-2xl"
			onclick={start}>Start</button
		>
	{:else}
		<section class="absolute inset-0 flex justify-center max-h-svh">
			<div
				class="w-full md:w-11/12 h-4/5 mt-10 bevel rounded-br-4xl rounded-tl-4xl border-4 border-a2 dark:border-a10 expand p-6 grid"
			>
				<p class="text-9xl"><ScrambleRevealText text="let's begin!" animateOnLoad/></p>

				<div class=" flex justify-center items-center">
					<GamepadDirectional
						class="animate-ping w-32 h-32"
					/>
				</div>
			</div>
		</section>
	{/if}
</div>

<style>
	.expand {
		view-transition-name: header;
	}
</style>
