<script>
	import bartleTestQuestions from "../assets/bartleTestQuestions.json";
	import Button from "./utils/Button.svelte";

	let { playerProfile = {}, done = () => {} } = $props();

	let currentQ = $state(0);
	let question = $derived(bartleTestQuestions[currentQ].question);

	function next(typeOfPlayer) {
		if (currentQ >= bartleTestQuestions.length - 1) return done();
		document.startViewTransition(() => {
			currentQ = currentQ + 1;
		});

		if (isNaN(playerProfile[typeOfPlayer])) {
			playerProfile[typeOfPlayer] = 1;
		} else {
			playerProfile[typeOfPlayer]++;
		}
	}
</script>

<div class="w-full h-full grid grid-rows-[5%_60%_1fr]">
	<div class="flex justify-center items-center">
		<div class="w-3/4">
			<div class="h-2 rounded-4xl w-full bg-a3 overflow-clip">
				<div
					style="width: {(currentQ /
						bartleTestQuestions.length) *
						100}%;"
					class="bg-a1 w-1/12 h-full"
				></div>
			</div>
		</div>
	</div>
	<div class="flex items-center justify-center">
		<h1 class="qestion text-a7 text-4xl text-pretty text-center">
			{question}
		</h1>
	</div>
	<div class="h-full flex justify-center">
		<div class="w-full md:w-2/4 flex flex-col justify-center">
			{#each bartleTestQuestions[currentQ].options ?? [] as o}
				<Button
					onclick={() => next(o.type)}
					class="ar my-2 md:mx-2 select-none"
					>{o.text}</Button
				>
			{/each}
		</div>
	</div>
</div>

<style>
	.qestion {
		view-transition-name: match-element;
	}
</style>
