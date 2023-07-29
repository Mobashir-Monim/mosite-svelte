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

	const mobileAboutSectionClasses =
		'h-[calc(100vh-20px)] snap-start shrink-0 text-[0.8rem] flex flex-col justify-center mx-5 my-2.5';
</script>

<MediaQuery query="(max-width: 480px)" let:matches>
	{#if matches}
		<Section {contentKey}>
			<div class={mobileAboutSectionClasses} use:viewport on:enterViewport={setCurrentContentKey}>
				<AboutIntro />
			</div>
		</Section>

		<Section contentKey="about-description">
			<div class={mobileAboutSectionClasses} use:viewport on:enterViewport={setCurrentContentKey}>
				<AboutDescription />
			</div>
		</Section>

		<Section contentKey="skills">
			<div class={mobileAboutSectionClasses} use:viewport on:enterViewport={setCurrentContentKey}>
				<SkillBlock />
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
