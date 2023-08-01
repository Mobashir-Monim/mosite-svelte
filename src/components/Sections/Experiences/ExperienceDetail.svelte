<script lang="ts">
	import CloseIcon from '../../../assets/icons/CloseIcon.svelte';
	import type { ExperienceType } from '../../../types';

	export let experience: ExperienceType | null;
	export let setSelectedExperience: (experience: ExperienceType | null) => void;
	export let showContent: boolean;
</script>

<!-- {#if experience} -->
<div
	class="w-full flex flex-col gap-8 justify-between transit md:max-h-[545px] {showContent
		? 'md:w-[45%] md:px-6'
		: 'md:w-[0%] md:px-0'} md:mb-auto text-[0.8rem] text-justify md:pb-6 md:overflow-x-hidden"
>
	<div class="glassy-box flex flex-col gap-5 p-5 relative">
		<!-- <button
			class="transit absolute top-0 right-0 z-10 rounded-full w-[34px] h-[34px] bg-emerald-500 hover:bg-emerald-500/30 border-2 border-emerald-500"
			on:click={() => setSelectedExperience(null)}
		>
			<CloseIcon size={30} classes="fill-white absolute top-0 left-0" />
		</button> -->
		<div>
			<h1 class="border-b text-[1.2rem]">{experience?.position}</h1>
			<span class="text-[0.9rem]">{experience?.company}</span>
		</div>
		<div class="md:h-[405px] overflow-y-auto no-scroll-bar flex flex-col gap-5">
			{#if experience?.company_info}
				<p>{experience?.company_info}</p>
			{/if}
			{#if experience?.work_description}
				<p>{experience?.work_description}</p>
			{/if}

			{#if experience?.works.length}
				<div>
					<p class="border-b mb-2">Some of my work:</p>
					<ul class="!list-disc">
						{#each experience.works as work}
							<li class="line-clamp-1"> - {work.name}</li>
						{/each}
					</ul>
				</div>
			{/if}
		</div>
	</div>
</div>
<!-- {/if} -->
