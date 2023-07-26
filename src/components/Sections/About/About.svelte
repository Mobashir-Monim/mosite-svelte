<script lang="ts">
	import viewport from '../../../actions/useViewportAction';
	import SkillBlock from '../../SkillsBlock/SkillBlock.svelte';
	import Section from '../Section.svelte';
	import MediaQuery from '../../../MediaQuery.svelte';
	import AboutDescription from './AboutDescription.svelte';
	import AboutIntro from './AboutIntro.svelte';

	export let setCurrentContentKey: (a: string) => void;
	const contentKey: string = 'about';
	const mobileAboutSectionClasses =
		'h-[calc(100vh-20px)] snap-start shrink-0 text-[0.8rem] flex flex-col justify-center mx-5 my-2.5';
</script>

<MediaQuery query="(max-width: 480px)" let:matches>
	{#if matches}
		<div
			class={mobileAboutSectionClasses}
			use:viewport
			on:enterViewport={() => setCurrentContentKey(contentKey)}
		>
			<AboutIntro />
		</div>

		<div
			class={mobileAboutSectionClasses}
			use:viewport
			on:enterViewport={() => setCurrentContentKey(contentKey)}
		>
			<AboutDescription />
		</div>

		<div
			class={mobileAboutSectionClasses}
			use:viewport
			on:enterViewport={() => setCurrentContentKey(contentKey)}
		>
			<SkillBlock />
		</div>
	{:else}
		<Section {contentKey}>
			<div class="text-[0.8rem] relative w-full h-full flex flex-col justify-center">
				<div
					class="hidden md:flex flex-col justify-between gap-5 w-full"
					use:viewport
					on:enterViewport={() => setCurrentContentKey(contentKey)}
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
