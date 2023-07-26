<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import Logo from '../assets/icons/Logo.svelte';
	import LogoBlock from '../components/LogoBlock/LogoBlock.svelte';
	import NameBlock from '../components/NameBlock/NameBlock.svelte';
	import NavList from '../components/NavList/NavList.svelte';
	import About from '../components/Sections/About/About.svelte';
	import Hero from '../components/Sections/Hero.svelte';
	import SocialsBlock from '../components/SocialsBlock/SocialsBlock.svelte';
	import type { NavItemType, PersonNameType, SocialItemType } from '../types';

	let screenWidth: number, screenHeight: number;
	let activeContent: string = '';
	let name: PersonNameType = {
		first: 'Mobashir',
		last: 'Monim'
	};
	let items: NavItemType[] = [
		{
			label: 'About',
			contentKey: 'about'
		},
		{
			label: 'Experience',
			contentKey: 'experience'
		},
		{
			label: 'Projects',
			contentKey: 'projects'
		},
		{
			label: 'Education',
			contentKey: 'education'
		}
	];
	let socialItems: SocialItemType[] = [
		{
			label: 'facebook',
			link: 'https://www.facebook.com/mobashir.monim'
		},
		{
			label: 'twitter',
			link: 'https://twitter.com/M_Monim'
		},
		{
			label: 'github',
			link: 'https://github.com/mobashir-monim'
		},
		{
			label: 'linkedin',
			link: 'https://www.linkedin.com/in/mobashir-monim/'
		}
	];

	let currentContent: string = 'hero';
	const setCurrentContentKey: (a: string) => void = (contentKey) => {
		currentContent = contentKey;
	};
</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} />

<main
	class="snap-y snap-mandatory h-screen overflow-scroll relative flex flex-col gap bg-gradient-to-t"
>
	<div class="fixed top-0 left-0 w-full h-screen -z-10 bg-black">
		<div
			style={'background: conic-gradient(#111827 90deg, #164e63 180deg, #0c4a6e 270deg, #111827 360deg)'}
			class="transition-all duration-300 ease-linear bg-[conic-gradient(#111827_90deg_#0c4a6e_90deg_#e11d48_90deg_#111827_90deg)] from-gray-900 via-sky-900 to-gray-900 w-full {currentContent ===
			'hero'
				? 'h-[100vh] opacity-100'
				: 'h-[0vh] opacity-0'}"
		/>
		<div
			class="transition-all duration-300 ease-linear flex bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-slate-600 via-slate-800 to-sky-900 w-full {currentContent ===
			'about'
				? 'h-[100vh] opacity-100'
				: 'h-[0vh] opacity-0'}"
		>
			<!-- <Logo
				size={300}
				svgBoxClasses="mx-auto my-auto fill-none "
				containerShape="none"
				solidShapeClasses="stroke-white fill-white"
				outlineShapeClasses="stroke-white/50"
			/> -->
		</div>
	</div>
	<Hero {setCurrentContentKey} />
	<About {setCurrentContentKey} />
</main>
