<script lang="ts">
	import type { ExperienceProjectType } from '../../../types';

	export let project: ExperienceProjectType;
	const tagClasses =
		'rounded-full cursor-default px-3 py-1.5 bg-gradient-to-tr transition-all duration-200 ease-linear font-mono';
	const typeClasses =
		'from-amber-400/80 to-pink-500/80 hover:drop-shadow-[0px_0px_10px_rgba(239,68,68,1)]';
	const sourceClasses =
		'from-teal-400/80 to-violet-500/80 hover:drop-shadow-[0px_0px_10px_rgba(5,150,105,1)]';
</script>

<div
	class="glassy-box p-5 w-full flex flex-col !text-[0.7rem] gap-10 hover:shadow-[0px_0px_0px_2px_rgba(52,211,153,1)] hover:bg-emerald-300/20 cursor-pointer transit"
>
	<div>
		<h2 class="border-b line-clamp-1 text-[1rem]">{project.name}</h2>
		<h3 class="line-clapm-1">{project.company ?? 'Hobby'}</h3>
	</div>
	<div class="flex flex-row justify-between">
		<div class="">
			<span class="{tagClasses} {typeClasses}"
				>{project.type[0].toLocaleUpperCase()}{project.type.slice(1)}</span
			>
			<span class="{tagClasses} {sourceClasses}"
				>{project.source[0].toLocaleUpperCase()}{project.source.slice(1)} Source</span
			>
		</div>
		<button class="" />
	</div>
</div>
