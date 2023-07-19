<script lang="ts">
	import Logo from '../assets/icons/Logo.svelte';
	import BgBlock from '../components/BgBlock.svelte';

	let screenWidth: number, screenHeight: number;
	$: topMargin = screenWidth % 50;
	$: leftMargin = screenHeight % 50;
	$: displayWidth = screenWidth - topMargin;
	$: displayHeight = screenHeight - leftMargin;
	$: blocksCount = (displayHeight * displayWidth) / 2500;
</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} />

<div
	class="w-[100vw] h-[100vh] bg-black/20 dark:bg-[#28282B]/90 relative flex flex-col justify-center"
/>
<div
	class="w-[20vw] h-[100vh] max-w-[400px] bg-white/50 dark:bg-black/70 fixed top-0 left-0 flex flex-col gap-8 p-5"
>
	<div class="mx-auto">
		<Logo size={150} />
	</div>

	<h2 class="mx-auto text-[1.5rem] dark:font-thin tracking-widest">
		<span class="font-semibold dark:font-normal text-[2rem]">M</span>obashir
		<span class="font-semibold dark:font-normal text-[2rem]">M</span><span>onim</span>
	</h2>
</div>
<!-- <div
	class="w-[100vw] h-[100vh] bg-black/50 fixed top-0 left-0 -z-50 flex flex-col justify-center overflow-hidden"
>
	<div class="flex flex-row flex-wrap overflow-hidden mx-auto" style="width: {displayWidth}px;">
		{#each { length: blocksCount } as _, id}
			<BgBlock {id} />
		{/each}
	</div>
</div> -->
