<script lang="ts">
	import ChevronIcon from '../../../assets/icons/ChevronIcon.svelte';
	import type { ExperienceType } from '../../../types';

	export let experience: ExperienceType | null;
	let currentContent: string | undefined;
	const setCurrentContent = (content: string): void => {
		if (currentContent === content) {
			currentContent = undefined;
		} else {
			currentContent = content;
		}
	};
</script>

{#if experience}
	<div class="w-full flex flex-col gap-8 justify-between transit text-[0.8rem] text-justify">
		<div class="flex flex-col md:flex-row gap-10">
			<div class="w-[150px] h-[150px] rounded-2xl overflow-hidden shrink-0 mx-auto md:mx-0">
				<img src={experience.logo} alt="{experience.company} Logo" />
			</div>
			<div class="flex flex-col gap-3 w-full my-auto">
				<h1 class="border-b-2 text-[1.2rem]">{experience.position}</h1>
				<div class="flex flex-col">
					<span class="text-[0.9rem]">{experience.company}</span>
					<span class="text-[0.9rem]">
						{experience.start.month}, {experience.start.year} -
						{#if experience.end}
							{experience.end.month}, {experience.end.year}
						{:else}
							Present
						{/if}
					</span>
				</div>
			</div>
		</div>

		<div
			class="flex flex-col gap-5 max-h-[45vh] md:max-h-[35vh] overflow-y-auto no-scroll-bar pb-5"
		>
			<div class="flex flex-col gap-3">
				<button
					class="text-left hover:text-emerald-400 group transit"
					on:click={() => setCurrentContent('company')}
				>
					<h2 class="text-[1.2rem] border-b-2 py-1">
						<ChevronIcon
							size={30}
							classes="fill-white group-hover:fill-emerald-400 my-auto "
							direction={currentContent === 'company' ? 'down' : 'right'}
						/>
						<span class="inline-block my-auto"> Company Profile </span>
					</h2>
				</button>
				<div
					style="max-height: {currentContent === 'company' ? '500px' : '0'};"
					class="transit overflow-hidden"
				>
					<div>{experience.company_info}</div>
				</div>
			</div>

			<div class="flex flex-col gap-3">
				<button
					class="text-left hover:text-emerald-400 group transit"
					on:click={() => setCurrentContent('work')}
				>
					<h2 class="text-[1.2rem] border-b-2">
						<ChevronIcon
							size={30}
							classes="fill-white group-hover:fill-emerald-400 my-auto"
							direction={currentContent === 'work' ? 'down' : 'right'}
						/>
						<span class="inline-block my-auto"> My work </span>
					</h2>
				</button>
				<div
					style="max-height: {currentContent === 'work' ? '500px' : '0'};"
					class="transit overflow-hidden"
				>
					<div>{experience.work_description}</div>
				</div>
			</div>

			<div class="flex flex-col gap-3">
				<button
					class="text-left hover:text-emerald-400 group transit"
					on:click={() => setCurrentContent('sample')}
				>
					<h2 class="text-[1.2rem] border-b-2">
						<ChevronIcon
							size={30}
							classes="fill-white group-hover:fill-emerald-400 my-auto"
							direction={currentContent === 'sample' ? 'down' : 'right'}
						/>
						<span class="inline-block my-auto"> Some of my work </span>
					</h2>
				</button>
				<ul
					style="max-height: {currentContent === 'sample' ? '550px' : '0'};"
					class="flex flex-col gap-3 transit overflow-hidden"
				>
					{#each experience.works as work}
						<li class="flex flex-col gap-0">
							<span>- {work.name}</span>
							<p class="ml-5">{work.description}</p>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
{/if}
