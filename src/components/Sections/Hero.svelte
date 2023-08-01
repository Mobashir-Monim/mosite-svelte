<script lang="ts">
	import type { SocialItemType } from '../../types';
	import viewport from '../../actions/useViewportAction';
	import Logo from '../../assets/icons/Logo.svelte';
	import SocialsBlock from '../SocialsBlock/SocialsBlock.svelte';
	import Section from './Section.svelte';
	import { currentContentStore } from '../../store';

	const contentKey: string = 'hero';
	let setCurrentContentKey: () => void = () => {
		currentContentStore.set(contentKey);
	};

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
			label: 'email',
			link: 'mailto:mobashirmonim@gmail.com'
		},
		{
			label: 'linkedin',
			link: 'https://www.linkedin.com/in/mobashir-monim/'
		}
	];
</script>

<Section {contentKey}>
	<div
		class="w-full flex flex-col gap-10 md:gap-5"
		use:viewport
		on:enterViewport={setCurrentContentKey}
	>
		<Logo
			size={200}
			svgBoxClasses="mx-auto fill-none"
			containerShape="none"
			solidShapeClasses="stroke-white fill-white stroke-2"
			outlineShapeClasses="stroke-white fill-violet-500"
		/>
		<div class="mx-auto">
			<div
				class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-violet-500 text-center w-full"
			>
				<!-- class="bg-clip-text text-transparent bg-gradient-to-tr from-yellow-300 to-red-500 text-center w-full" -->

				<h1 class="font-bold text-[3rem]">Hi, I am Mobashir!</h1>
				<div class="text-center text-white/80">Fullstack Web Developer</div>
			</div>
		</div>
		<div class="mt-10">
			<SocialsBlock {socialItems} />
		</div>
	</div>
</Section>
