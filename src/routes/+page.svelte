<script lang="ts">
	import Logo from '../assets/icons/Logo.svelte';
	import BgBlock from '../components/BgBlock.svelte';
	import Nav from '../components/Nav/Nav.svelte';

	let screenWidth: number, screenHeight: number;
	let items: string[] = ['About', 'Experience', 'Projects', 'Education', 'Contact'];
	$: topMargin = screenWidth % 50;
	$: leftMargin = screenHeight % 50;
	$: displayWidth = screenWidth - topMargin;
	$: displayHeight = screenHeight - leftMargin;
	$: blocksCount = (displayHeight * displayWidth) / 2500;
</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} />

<div
	class="w-[100vw] h-[100vh] bg-black/20 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-teal-400 to-violet-500 border-blue-400 dark:from-gray-900 dark:via-sky-900 dark:to-gray-900 relative flex flex-col justify-center"
/>
<div
	class="w-[25vw] h-[100vh] max-w-[350px] bg-white/50 dark:bg-black/70 fixed top-0 left-0 flex flex-col gap-8 p-10"
>
	<div
		class="mx-auto drop-shadow-[0px_0px_5px_rgba(96,165,250,1)] dark:drop-shadow-[0px_0px_5px_rgba(5,150,105,1)]"
	>
		<Logo size={150} />
	</div>

	<h2
		class="mx-auto text-[1.5rem] font-light dark:font-thin tracking-widest drop-shadow-[0px_0px_5px_rgba(96,165,250,1)] dark:drop-shadow-[0px_0px_5px_rgba(5,150,105,1)]"
	>
		<span class="font-semibold dark:font-normal text-[2rem]">M</span>obashir
		<span class="font-semibold dark:font-normal text-[2rem]">M</span><span>onim</span>
	</h2>

	<div class="mx-auto w-[200px]">
		<Nav {items} />
	</div>
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
