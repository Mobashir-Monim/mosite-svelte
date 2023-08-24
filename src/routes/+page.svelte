<script lang="ts">
	import { currentContentStore } from '../store';
	import About from '../components/Sections/About/About.svelte';
	import Hero from '../components/Sections/Hero.svelte';
	import Experience from '../components/Sections/Experiences/Experiences.svelte';
	import Projects from '../components/Sections/Projects/Projects.svelte';
	import Education from '../components/Sections/Education/Education.svelte';

	let screenWidth: number, screenHeight: number;

	let currentContent: string;
	currentContentStore.subscribe((value) => {
		currentContent = value;
	});
</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} />

<svelte:head>
	<title>Mobashir Monim</title>
</svelte:head>

<main
	class="snap-y snap-mandatory h-screen overflow-scroll relative flex flex-col gap bg-gradient-to-t"
>
	<div class="fixed top-0 left-0 w-full h-screen -z-10 bg-black">
		<div
			style="background: linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%);"
			class="transition-all duration-700 opacity-50 ease-linear w-full {currentContent === 'hero'
				? 'h-[100vh]'
				: 'h-[0vh]'}"
		/>
		<div
			style="background: conic-gradient(#202639 90deg, #164e63 180deg, #0c4a6e 270deg, #202639 360deg)"
			class="transition-all duration-700 ease-linear w-full {currentContent === 'about'
				? 'h-[100vh]'
				: 'h-[0vh]'}"
		/>
		<div
			style="background: conic-gradient(from -45deg at 70% 40%, rgb(32, 38, 57) 30deg, rgb(63, 76, 119) 220deg, rgb(63, 61, 81) 300deg, rgb(32, 38, 57) 360deg)"
			class="transition-all duration-700 ease-linear w-full {currentContent === 'experience'
				? 'h-[100vh]'
				: 'h-[0vh]'}"
		/>
		<div
			style="background: linear-gradient(50deg, rgba(40, 40, 40, 1), rgb(37, 84, 112));"
			class="transition-all duration-700 ease-linear w-full {currentContent === 'projects'
				? 'h-[100vh]'
				: 'h-[0vh]'}"
		/>
		<div
			style="background: linear-gradient(50deg, rgba(40, 40, 40, 1), rgb(37, 84, 112));"
			class="transition-all duration-700 ease-linear w-full {currentContent === 'education'
				? 'h-[100vh]'
				: 'h-[0vh]'}"
		/>
	</div>

	<Hero />
	<About />
	<Experience />
	<Projects />
	<Education />
</main>
