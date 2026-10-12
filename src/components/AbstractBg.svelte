<script lang="ts">
</script>

<div
	class="absolute w-svw h-svh transform-3d perspective-near overflow-clip z-0 g-grid"
>
	<div class="bg-a6/10 w-3/4 h-3/4 absolute top-0 left-0"></div>
	<div class="bg-a1/10 w-3/4 h-3/4 absolute bottom-0 right-0"></div>
	<div class="bg-a4/10 w-3/4 h-3/4 absolute bottom-0 left-0"></div>
	<div class="bg-a2/10 w-3/4 h-3/4 absolute top-0 right-0"></div>
</div>

<style>
	.g-grid {
		position: absolute;
		inset: 0;
		height: 100%;
		width: 100%;
		background-image: linear-gradient(
				to right,
				var(--color-a5) 1px,
				transparent 1px
			),
			linear-gradient(
				to bottom,
				var(--color-a5) 1px,
				transparent 1px
			);
		background-size: 24px 24px;
	}
</style>
