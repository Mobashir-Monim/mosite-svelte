<script lang="ts">
	export let items: string[];
</script>

<div class="flex flex-col gap-3">
	{#each items as item}
		<div class="flex flex-row gap-3 group cursor-pointer h-[25px]">
			<span
				class="h-[1px] my-auto w-[30px] group-hover:w-[60px] bg-black/50 group-hover:bg-black dark:bg-white/50 dark:group-hover:bg-white transition-all duration-150 ease-linear"
			/>
			<span
				class="text-black/50 group-hover:text-black dark:text-white/50 dark:group-hover:text-white transition-all duration-150 ease-linear text-[0.8rem] my-auto"
			>
				{item.toUpperCase()}
			</span>
		</div>
	{/each}
</div>
