<script lang="ts">
	import Logo from '../../../assets/icons/Logo.svelte';
	import type { ExperienceProjectType } from '../../../types';

	export let project: ExperienceProjectType;
	export let isSelected: boolean = false;
	export let index: number;
	export let selectProject: (project: ExperienceProjectType) => void;
	const tagClasses =
		'rounded-full cursor-default px-3 py-1.5 bg-gradient-to-tr transition-all duration-200 ease-linear font-mono min-w-[123px] text-center';
	const closedSourceClasses =
		'from-amber-400/80 to-pink-500/80 hover:drop-shadow-[0px_0px_10px_rgba(239,68,68,1)]';
	const openSourceClasses =
		'from-teal-400/80 to-violet-500/80 hover:drop-shadow-[0px_0px_10px_rgba(5,150,105,1)]';
</script>

<div
	on:click={() => selectProject(project)}
	on:keyup={() => selectProject(project)}
	role="button"
	tabindex={index}
	class="glassy-box p-5 w-full flex flex-col !text-[0.7rem] gap-2 hover:shadow-[0px_0px_0px_2px_rgba(52,211,153,1)] hover:bg-emerald-300/20 cursor-pointer transit {isSelected
		? '!shadow-[0px_0px_0px_2px_rgba(244,63,94,1)] !bg-rose-500/30'
		: 'shadow-[5px_5px_20px_5px_rgba(23,23,23,0.5)]'}"
>
	<div>
		<h2 class="border-b line-clamp-1 text-[1rem]">{project.name}</h2>
		<h3 class="line-clapm-1">{project.type[0].toLocaleUpperCase()}{project.type.slice(1)}</h3>
	</div>
	<div class="flex flex-row justify-between">
		<!-- <span class="{tagClasses} {typeClasses}"
				>{project.type[0].toLocaleUpperCase()}{project.type.slice(1)}</span
			> -->

		{#if project.company}
			<span class="my-auto w-[30px] h-[30px] rounded-full overflow-hidden">
				<img src={project.company_logo} alt="{project.company} logo" />
			</span>
		{:else}
			<span
				class="w-[30px] h-[30px] flex flex-col justify-center rounded-full overflow-hidden bg-gradient-to-bl from-amber-400"
			>
				<Logo
					size={30}
					svgBoxClasses="mx-auto fill-none"
					containerShape="none"
					solidShapeClasses="stroke-white fill-white stroke-2"
					outlineShapeClasses="stroke-white"
				/>
			</span>
		{/if}
		<span
			class="my-auto {tagClasses} {project.source === 'closed'
				? closedSourceClasses
				: openSourceClasses}"
		>
			{project.source[0].toLocaleUpperCase()}{project.source.slice(1)} Source
		</span>
	</div>
</div>
