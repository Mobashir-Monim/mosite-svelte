<script lang="ts">
	import MediaQuery from '../../../MediaQuery.svelte';
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
	class="mt-7 md:mt-0 flex flex-col justify-center h-[80px] md:h-[100px] w-[45%] md:w-full hover:shadow-[0px_0px_0px_2px_rgba(52,211,153,1)] relative mr-2.5 p-2 md:px-5 md:py-5 transit cursor-pointer hover:bg-emerald-300/20 group glassy-box {isSelected
		? '!shadow-[0px_0px_0px_2px_rgba(244,63,94,1)] !from-slate-500 !bg-rose-500/30'
		: 'shadow-[5px_5px_20px_5px_rgba(23,23,23,0.5)]'}"
>
	<div
		class="w-[50px] h-[50px] rounded-full md:w-[75px] md:h-[75px] flex flex-col justify-center absolute top-[-15px] right-[-15px] md:top-[-25px] md:right-[-25px] {isSelected
			? '!shadow-[0px_0px_0px_2px_rgba(244,63,94,1)]'
			: 'shadow-[5px_5px_20px_5px_rgba(23,23,23,0.5)]'} group-hover:shadow-[0px_0px_0px_2px_rgba(52,211,153,1)] hover:shadow-[0px_0px_0px_2px_rgba(52,211,153,1)] overflow-hidden transit"
	>
		<img src={experience.logo} class="m-auto" alt="bracu logo" />
	</div>
	<div class="md:h-[50px] flex flex-col justify-center">
		<div
			class="text-[0.8rem] md:mr-[45px] md:border-b flex flex-row gap-2 md:gap-5 md:pb-1 transit"
		>
			<div class="my-auto w-[15%] md:w-[5%] overflow-hidden transit">
				<LinkIcon size={20} />
			</div>
			<div class="flex flex-col md:flex-row md:gap-2 my-auto">
				<span class="hidden md:inline-block">
					{experience.start.month}, {experience.start.year}
				</span>
				<span class="inline-block md:hidden">
					{experience.start.month}, {experience.start.year.slice(2)}
				</span>
				<span class="hidden md:inline-block">-</span>
				<span>
					{#if experience.end}
						<MediaQuery query="(max-width: 480px)" let:matches>
							{#if matches}
								{experience.end.month}, {experience.end.year.slice(2)}
							{:else}
								{experience.end.month}, {experience.end.year}
							{/if}
						</MediaQuery>
					{:else}
						Present
					{/if}
				</span>
			</div>
		</div>
	</div>
	<div class="hidden md:flex flex-col md:flex-row justify-between">
		<div class="flex flex-col w-full md:w-[80%]">
			<h1 class="text-[0.9rem] md:text-[1rem]">
				{experience.position}
			</h1>
		</div>
	</div>
</div>
