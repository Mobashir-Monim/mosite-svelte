<script lang="ts">
	import viewport from '../../../actions/useViewportAction';
	import SkillBlock from '../../SkillsBlock/SkillBlock.svelte';
	import Section from '../Section.svelte';
	import MediaQuery from '../../../MediaQuery.svelte';
	import AboutDescription from './AboutDescription.svelte';
	import AboutIntro from './AboutIntro.svelte';
	import { currentContentStore } from '../../../store';

	const contentKey: string = 'about';
	let setCurrentContentKey: () => void = () => {
		currentContentStore.set(contentKey);
	};

	const mobileSectionContainers: string =
		'w-[100vw] mx-5 my-2.5 h-full flex flex-col justify-center';
	const mobileContentDisplay = {
		active: 'intro',
		left: 'left-0'
	};

	const setMobileContentDisplay = (content: string): void => {
		if (content === 'intro') {
			mobileContentDisplay.left = 'left-0';
		} else if (content === 'about') {
			mobileContentDisplay.left = 'left-[-100vw]';
		} else {
			mobileContentDisplay.left = 'left-[-200vw]';
		}

		mobileContentDisplay.active = content;
	};

	const mobileAboutSectionClasses =
		'h-[calc(100vh-20px)] snap-start shrink-0 text-[0.8rem] flex flex-col justify-center mx-5 my-2.5';
</script>

<MediaQuery query="(max-width: 480px)" let:matches>
	{#if matches}
		<Section {contentKey} divClasses="!px-0 transit overflow-hidden">
			<div
				class="text-[0.8rem] absolute top-0 {mobileContentDisplay.left} w-[300vw] h-[calc(100vh-20px)] snap-start flex flex-row justify-around transit"
			>
				<div class={mobileSectionContainers}>
					<AboutIntro />
				</div>
				<div class={mobileSectionContainers}>
					<AboutDescription />
				</div>
				<div class={mobileSectionContainers}>
					<SkillBlock />
				</div>
			</div>
			<div
				class="absolute bottom-[5%] text-[0.8rem] left-0 flex flex-row gap-0 justify-center w-full"
				use:viewport
				on:enterViewport={setCurrentContentKey}
			>
				<button
					on:click={() => setMobileContentDisplay('intro')}
					class="transit px-3 py-1 border-2 border-emerald-500 {mobileContentDisplay.active ===
					'intro'
						? 'bg-emerald-500/30'
						: 'bg-emerald-500'} rounded-l-full"
				>
					Intro
				</button>
				<button
					on:click={() => setMobileContentDisplay('about')}
					class="transit px-3 py-1 border-2 border-emerald-500 {mobileContentDisplay.active ===
					'about'
						? 'bg-emerald-500/30'
						: 'bg-emerald-500'}"
				>
					About me
				</button>
				<button
					on:click={() => setMobileContentDisplay('skills')}
					class="transit px-3 py-1 border-2 border-emerald-500 {mobileContentDisplay.active ===
					'skills'
						? 'bg-emerald-500/30'
						: 'bg-emerald-500'} rounded-r-full"
				>
					Skills
				</button>
			</div>
		</Section>
	{:else}
		<Section {contentKey}>
			<div class="text-[0.8rem] relative w-full h-full flex flex-col justify-center">
				<div
					class="hidden md:flex flex-col justify-between gap-5 w-full"
					use:viewport
					on:enterViewport={setCurrentContentKey}
				>
					<div class="flex flex-row gap-5 justify-between w-full">
						<AboutIntro />
						<AboutDescription />
					</div>
					<SkillBlock />
				</div>
			</div>
		</Section>
	{/if}
</MediaQuery>
