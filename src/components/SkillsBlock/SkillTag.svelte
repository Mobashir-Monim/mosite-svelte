<script lang="ts">
	import type { SkillTagType } from '../../types';

	export let skill: SkillTagType;

	let tagClasses: string =
		skill.type === 'technical'
			? 'from-amber-400/80 to-pink-500/80 hover:drop-shadow-[0px_0px_10px_rgba(239,68,68,1)]'
			: skill.type === 'programming-language'
			? 'from-teal-400/80 to-violet-500/80 hover:drop-shadow-[0px_0px_10px_rgba(5,150,105,1)]'
			: 'from-white/50 to-stone-600/80 hover:drop-shadow-[0px_0px_10px_rgba(120,113,108,1)]';
</script>

<span
	class="text-[0.7rem] rounded-full cursor-default px-3 py-1.5 bg-gradient-to-tr transition-all duration-200 ease-linear font-mono {tagClasses}"
>
	{skill.name}
</span>
