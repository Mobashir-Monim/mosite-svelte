<script lang="ts">
	import type { ExperienceType } from '../../../types';

	export let expereince: ExperienceType;
</script>

<div
	class="flex flex-col h-[80px] md:h-[100px] w-full hover:shadow-[0px_0px_0px_2px_rgba(52,211,153,1)] relative mr-2.5 px-5 py-5 transition-all duration-300 ease-linear cursor-pointer hover:bg-emerald-300/20 group glassy-box"
>
	<div
		class="w-[50px] h-[50px] rounded-full md:w-[75px] md:h-[75px] flex flex-col justify-center absolute top-[-25px] right-[-25px] md:top-[-25px] md:right-[-25px] shadow-[5px_5px_20px_5px_rgba(23,23,23,0.5)] group-hover:shadow-[0px_0px_0px_2px_rgba(52,211,153,1)] hover:shadow-[0px_0px_0px_2px_rgba(52,211,153,1)] overflow-hidden transition-all duration-300 ease-linear"
	>
		<img src={expereince.logo} class="m-auto" alt="bracu logo" />
	</div>
	<div class="md:h-[50px] flex flex-col justify-center">
		<div class="text-[0.8rem] mr-[45px] md:mlr[65px] border-b">
			{expereince.start.month}, {expereince.start.year} -
			{#if expereince.end}
				{expereince.end.month}, {expereince.end.year}
			{:else}
				Present
			{/if}
		</div>
	</div>
	<div class="flex flex-col md:flex-row justify-between">
		<div class="flex flex-col w-full md:w-[80%]">
			<h1 class="text-[0.9rem] md:text-[1rem]">{expereince.position}</h1>
			<!-- <h3 class="text-[0.8rem]">CSE, Brac University</h3> -->
		</div>
	</div>
</div>
