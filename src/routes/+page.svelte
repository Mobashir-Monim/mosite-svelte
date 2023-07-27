<script lang="ts">
	import About from '../components/Sections/About/About.svelte';
	import Hero from '../components/Sections/Hero.svelte';
	import type { NavItemType, PersonNameType, SocialItemType } from '../types';
	import { currentContentStore } from '../store';

	let screenWidth: number, screenHeight: number;

	let currentContent: string;
	currentContentStore.subscribe((value) => {
		currentContent = value;
	});
</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} />

<main
	class="snap-y snap-mandatory h-screen overflow-scroll relative flex flex-col gap bg-gradient-to-t"
>
	<div class="fixed top-0 left-0 w-full h-screen -z-10 bg-black">
		<div
			style="background: linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%);"
			class="transition-all duration-300 opacity-50 ease-linear w-full {currentContent === 'hero'
				? 'h-[100vh]'
				: 'h-[0vh]'}"
		/>
		<div
			style="background: conic-gradient(#202639 90deg, #164e63 180deg, #0c4a6e 270deg, #202639 360deg)"
			class="transition-all duration-300 ease-linear w-full {currentContent === 'about'
				? 'h-[100vh]'
				: 'h-[0vh]'}"
		/>
	</div>
	<Hero />
	<About />
</main>
