<script lang="ts">
	import LogoBlock from '../components/LogoBlock/LogoBlock.svelte';
	import NameBlock from '../components/NameBlock/NameBlock.svelte';
	import NavList from '../components/NavList/NavList.svelte';
	import SocialsBlock from '../components/SocialsBlock/SocialsBlock.svelte';
	import type { NavItemType, PersonNameType, SocialItemType } from '../types';

	let screenWidth: number, screenHeight: number;
	let name: PersonNameType = {
		first: 'Mobashir',
		last: 'Monim'
	};
	let items: NavItemType[] = [
		{
			label: 'About',
			contentKey: ''
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
	$: topMargin = screenWidth % 50;
	$: leftMargin = screenHeight % 50;
	$: displayWidth = screenWidth - topMargin;
	$: displayHeight = screenHeight - leftMargin;
</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} />

<div
	class="w-[100vw] h-[100vh] bg-black/20 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-cyan-500 via-blue-500 to-cyan-500 dark:from-gray-900 dark:via-sky-900 dark:to-gray-900 relative flex flex-col justify-center"
/>
<div
	class="w-[25vw] h-[100vh] max-w-[350px] bg-white/30 dark:bg-black/40 fixed top-0 left-0 flex flex-col gap-8 p-10"
>
	<LogoBlock />
	<NameBlock {name} />
	<NavList {items} />
	<SocialsBlock {socialItems} />
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
