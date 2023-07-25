<script lang="ts">
	import viewport from '../../actions/useViewportAction';
	import Section from './Section.svelte';

	export let setCurrentContentKey: (a: string) => void;
	const contentKey: string = 'about';

	let focusClasses: string = 'text-transparent font-semibold';
</script>

<Section>
	<div
		class="flex flex-col gap-5 bg-gradient-to-bl from-cyan-500 to-violet-500 bg-clip-text"
		use:viewport
		on:enterViewport={() => setCurrentContentKey(contentKey)}
	>
		<p class="text-justify">
			I am a <span class={focusClasses}>full stack web developer</span> with a passion for learning and
			creating. I am innately curious and have a love for research, exploring new ideas and approaches.
			Always seeking to contribute meaningfully to solutions in this ever-evolving realm of tech.
		</p>
		<p class="text-justify">
			I have interests in <span class={focusClasses}>cryptography</span>,
			<span class={focusClasses}>data analytics</span>,
			<span class={focusClasses}>information security</span>
			and <span class={focusClasses}>blockchain</span>, and continuously strive to expand my
			knowledge and skill sets.
		</p>
		<p class="text-justify">
			Having started working since 2014 and still being in high school, I have learned to <span
				class={focusClasses}>balance</span
			>
			and <span class={focusClasses}>manage</span> my work and time quite efficiently. At the same
			time, I have been able to accumulate a relatively significant amount of experience from
			teaching (both professionally en masse and as a private tutor), to working as a volunteer in
			non-profit, to building software in <span class={focusClasses}>start-up conditions</span> and
			managing people and processes in
			<span class={focusClasses}>corporate</span>
			and <span class={focusClasses}>non-corporate</span>
			environments.
		</p>
	</div>
</Section>
