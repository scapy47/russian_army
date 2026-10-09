<script lang="ts">
	import {
		Trophy,
		Compass,
		Users,
		Sword,
		GamepadDirectional,
	} from "@lucide/svelte";
	import ScrambleRevealText from "./utils/ScrambleRevealText.svelte";
	import Button from "./utils/Button.svelte";
	import TermDialog from "./utils/TermDialog.svelte";
	import Quiz from "./Quiz.svelte";
	import { LineChart, PieChart } from "layerchart";
	import { curveLinearClosed } from "d3-shape";
	// import { Trophy, Compass, Users, Sword } from "lucide-svelte";

	let step = $state<"a" | "b" | "c" | "d">("a");
	let profile = {};

	const start = async () => {
		const t1 = document.startViewTransition(() => (step = "b"));
		await t1.finished;

		setTimeout(() => {
			document.startViewTransition(() => (step = "c"));
		}, 2000);
	};

	const quizDone = async () =>
		document.startViewTransition(() => (step = "d"));

	const close = async () =>
		document.startViewTransition(() => (step = "a"));

	const data = $derived(
		Object.entries(profile).map(([name, value]) => ({
			name,
			value,
		})),
	);

	const types = [
		{
			icon: Trophy,
			name: "Achievers",
			desc: "Focus on gaining measurable progress. points, levels, equipment, and completing goals.",
		},
		{
			icon: Compass,
			name: "Explorers",
			desc: "Want to discover and understand the game world. geography, secrets, mechanics, and glitches.",
		},
		{
			icon: Users,
			name: "Socializers",
			desc: "Play for the social experience. chatting, role-playing, building relationships, helping others.",
		},
		{
			icon: Sword,
			name: "Killers",
			desc: "Enjoy competing against and dominating other players through PvP, provocation, or disruption.",
		},
	];
</script>

<div class="root">
	{#if step === "a"}
		<Button class="expand w-48" fn={start}>start</Button>
	{:else if step === "b"}
		<TermDialog
			class="expand w-full md:w-11/12 h-4/5 border-4 m-auto grid"
		>
			<p class="text-9xl hidden lg:block text-center">
				<ScrambleRevealText
					speed={30}
					text="let's begin!"
					animateOnLoad
				/>
			</p>
			<p class="lg:hidden text-8xl text-center">
				<ScrambleRevealText
					speed={30}
					text="let's"
					animateOnLoad
				/>
				<ScrambleRevealText
					speed={30}
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
	{:else if step === "c"}
		<TermDialog class="expand w-full h-full border-8">
			<Quiz playerProfile={profile} done={quizDone} />
		</TermDialog>
	{:else}
		<TermDialog
			class="expand w-11/12 h-4/5 border-8 m-auto grid grid-cols-2 grid-rows-2"
		>
			<LineChart
				class={"col-span-2 lg:row-span-2 lg:col-span-1"}
				{data}
				x="name"
				y="value"
				yPadding={[0, 8]}
				padding={{ top: 8 }}
				radial
				points
				props={{
					spline: {
						curve: curveLinearClosed,
						class: "stroke-primary fill-primary/20",
					},
					xAxis: {
						tickLength: 0,
					},
					yAxis: {
						ticks: [0, 5, 10],
						format: (d) => "",
					},
					grid: {
						yTicks: [0, 5, 10],
						radialY: "linear",
					},
					highlight: {
						lines: false,
					},
					tooltip: {
						context: {
							mode: "voronoi",
						},
					},
				}}
			/>
			<div
				class="h-full w-full col-span-2 lg:row-span-2 lg:col-span-1 px-6 flex flex-col justify-around overflow-x-scroll"
			>
				<Button fn={close}>close</Button>
				{#each types as { icon: Icon, name, desc }}
					<h3
						class="flex items-center gap-2 mt-4 text-2xl lg:text-4xl"
					>
						<Icon />
						<span>{name}</span>
					</h3>
					<p>{desc}</p>
				{/each}
			</div>
		</TermDialog>
	{/if}
</div>

<style>
	.root :global(.expand) {
		view-transition-name: expand;
	}
</style>
