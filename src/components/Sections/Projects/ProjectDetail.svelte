<script lang="ts">
	import ChevronIcon from '../../../assets/icons/ChevronIcon.svelte';
	import Logo from '../../../assets/icons/Logo.svelte';
	import type { ExperienceProjectType } from '../../../types';

	export let project: ExperienceProjectType | null;
	let currentContent: string | undefined;
	const setCurrentContent = (content: string): void => {
		if (currentContent === content) {
			currentContent = undefined;
		} else {
			currentContent = content;
		}
	};

	const tagClasses =
		'rounded-full cursor-default px-3 py-1.5 bg-gradient-to-tr transition-all duration-200 ease-linear font-mono text-center';
	const closedSourceClasses =
		'from-amber-400/80 to-pink-500/80 hover:drop-shadow-[0px_0px_10px_rgba(239,68,68,1)]';
	const openSourceClasses =
		'from-teal-400/80 to-violet-500/80 hover:drop-shadow-[0px_0px_10px_rgba(5,150,105,1)]';
</script>

{#if project}
	<div class="w-full flex flex-col gap-8 justify-between transit text-[0.8rem] text-justify">
		<div class="flex flex-col gap-3">
			<div>
				<h1 class="border-b-2 text-[1.2rem]">{project.name}</h1>
				<span class="text-[0.8rem]">{project.type[0].toUpperCase()}{project.type.slice(1)}</span>
			</div>
			<div class="flex flex-row justify-between">
				<div class="flex flex-row gap-3">
					{#if project.company}
						<span class="my-auto w-[40px] h-[40px] rounded-full overflow-hidden">
							<img src={project.company_logo} alt="{project.company} logo" />
						</span>
					{:else}
						<span
							class="w-[40px] h-[40px] flex flex-col justify-center rounded-full overflow-hidden bg-gradient-to-bl from-amber-400"
						>
							<Logo
								size={40}
								svgBoxClasses="mx-auto fill-none"
								containerShape="none"
								solidShapeClasses="stroke-white fill-white stroke-2"
								outlineShapeClasses="stroke-white"
							/>
						</span>
					{/if}
					<span class="my-auto line-clamp-1 text-left">
						{project.company ? project.company : 'Hobby Project'}
					</span>
				</div>

				<span
					class="my-auto {tagClasses} {project.source === 'closed'
						? closedSourceClasses
						: openSourceClasses}"
				>
					{project.source[0].toLocaleUpperCase()}{project.source.slice(1)}
				</span>
			</div>
		</div>

		<div
			class="flex flex-col gap-5 max-h-[45vh] md:max-h-[35vh] overflow-y-auto no-scroll-bar pb-5"
		>
			{#if project.url}
				<a
					href={project.url}
					target="_blank"
					class="text-emerald-300 hover:text-rose-400 transit font-normal">Project Link</a
				>
			{/if}
			<div class="flex flex-col gap-3">
				<button
					class="text-left hover:text-emerald-400 group transit"
					on:click={() => setCurrentContent('overview')}
				>
					<h2 class="text-[1.2rem] border-b-2 py-1">
						<ChevronIcon
							size={30}
							classes="fill-white group-hover:fill-emerald-400 my-auto "
							direction={currentContent === 'overview' ? 'down' : 'right'}
						/>
						<span class="inline-block my-auto"> Project Overview </span>
					</h2>
				</button>
				<div
					style="max-height: {currentContent === 'overview' ? '500px' : '0'};"
					class="transit overflow-hidden"
				>
					<div>{project.description}</div>
				</div>
			</div>

			<div class="flex flex-col gap-3">
				<button
					class="text-left hover:text-emerald-400 group transit"
					on:click={() => setCurrentContent('features')}
				>
					<h2 class="text-[1.2rem] border-b-2">
						<ChevronIcon
							size={30}
							classes="fill-white group-hover:fill-emerald-400 my-auto"
							direction={currentContent === 'features' ? 'down' : 'right'}
						/>
						<span class="inline-block my-auto"> Features </span>
					</h2>
				</button>
				<ul
					style="max-height: {currentContent === 'features' ? '550px' : '0'};"
					class="flex flex-col gap-3 transit overflow-hidden"
				>
					{#each project.features as feature}
						<li class="flex flex-col gap-0">
							<span>- {feature}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
{/if}
