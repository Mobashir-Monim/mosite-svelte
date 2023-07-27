<script lang="ts">
	import type { SocialItemType } from '../../../types';
	import viewport from '../../../actions/useViewportAction';
	import Logo from '../../../assets/icons/Logo.svelte';
	import SocialsBlock from '../../SocialsBlock/SocialsBlock.svelte';
	import Section from '../Section.svelte';
	import { currentContentStore } from '../../../store';

	const contentKey: string = 'experience';
	let setCurrentContentKey: () => void = () => {
		currentContentStore.set(contentKey);
	};
</script>

<Section {contentKey}>
	<div class="flex flex-col md:flex-row gap-5 md:gap-5" use:viewport on:enterViewport={setCurrentContentKey}>
		<div>
            something
        </div>
        <div class="flex flex-col gap-5">

        </div>
	</div>
</Section>
