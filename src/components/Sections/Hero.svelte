<script lang="ts">
	import viewport from '../../actions/useViewportAction';
	import Logo from '../../assets/icons/Logo.svelte';
	import Section from './Section.svelte';

	export let setCurrentContentKey: (a: string) => void;
	const contentKey: string = 'hero';
</script>

<Section {contentKey}>
	<div
		class="w-full flex flex-col"
		use:viewport
		on:enterViewport={() => setCurrentContentKey(contentKey)}
	>
		<div class="h-[150px] overflow-hidden">
			<Logo
				size={200}
				svgBoxClasses="mx-auto fill-none"
				containerShape="none"
				solidShapeClasses="stroke-white fill-white"
				outlineShapeClasses="stroke-white/50"
			/>
		</div>
		<div class="mx-auto">
			<div
				class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-violet-500 text-center w-full"
			>
				<h1 class="font-bold text-[3rem]">Hi, I am Mobashir!</h1>
				<div class="text-center text-white/80">Fullstack Web Developer</div>
			</div>
		</div>
	</div>
</Section>
