<script lang="ts">
	import LinkIcon from '../../../assets/icons/LinkIcon.svelte';
	import type { ExperienceType } from '../../../types';

	export let experience: ExperienceType;
	export let isSelected: boolean;
	export let setSelectedExperience: (experience: ExperienceType) => void;
	export let index: number;
</script>

<div
	on:click={() => setSelectedExperience(experience)}
	on:keyup={() => setSelectedExperience(experience)}
	role="button"
	tabindex={index}
	class="flex flex-col h-[80px] md:h-[100px] w-full hover:shadow-[0px_0px_0px_2px_rgba(52,211,153,1)] relative mr-2.5 px-5 py-5 transit cursor-pointer hover:bg-emerald-300/20 group glassy-box {isSelected
		? '!shadow-[0px_0px_0px_2px_rgba(244,63,94,1)] !bg-rose-500/30'
		: 'shadow-[5px_5px_20px_5px_rgba(23,23,23,0.5)]'}"
>
	<div
		class="w-[50px] h-[50px] rounded-full md:w-[75px] md:h-[75px] flex flex-col justify-center absolute top-[-25px] right-[-25px] md:top-[-25px] md:right-[-25px] {isSelected
			? '!shadow-[0px_0px_0px_2px_rgba(244,63,94,1)]'
			: 'shadow-[5px_5px_20px_5px_rgba(23,23,23,0.5)]'} group-hover:shadow-[0px_0px_0px_2px_rgba(52,211,153,1)] hover:shadow-[0px_0px_0px_2px_rgba(52,211,153,1)] overflow-hidden transit"
	>
		<img src={experience.logo} class="m-auto" alt="bracu logo" />
	</div>
	<div class="md:h-[50px] flex flex-col justify-center">
		<div
			class="text-[0.8rem] mr-[45px] border-b flex flex-row {isSelected
				? 'gap-0'
				: 'gap-5'} pb-1 transit"
		>
			<div class="my-auto {isSelected ? 'w-[0%]' : 'w-[5%]'} overflow-hidden transit">
				<LinkIcon
					size={20}
					classes=" group-hover:fill-emerald-300 {isSelected
						? '!fill-transparent'
						: 'fill-amber-500'}"
				/>
			</div>
			<div class="my-auto">
				{experience.start.month}, {experience.start.year} -
				{#if experience.end}
					{experience.end.month}, {experience.end.year}
				{:else}
					Present
				{/if}
			</div>
		</div>
	</div>
	<div class="flex flex-col md:flex-row justify-between">
		<div class="flex flex-col w-full md:w-[80%]">
			<h1 class="text-[0.9rem] md:text-[1rem]">
				{experience.position}
			</h1>
		</div>
	</div>
</div>
