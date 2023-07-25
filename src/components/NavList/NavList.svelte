<script lang="ts">
	import Logo from '../../assets/icons/Logo.svelte';
	import type { NavItemType } from '../../types';

	export let items: NavItemType[];
	export let activeContent: string = '';
	export let setActiveContent: (contentKey: string) => void;
</script>

<nav class="w-full flex flex-row gap-2 border-2 border-cyan-600 bg-violet-500/30 rounded-xl p-2">
	<button
		class="text-[0.8rem] py-1 px-2 cursor-pointer hover:bg-cyan-500/60 rounded-md transition-all duration-200 ease-linear"
		on:click={() => setActiveContent('')}
	>
		<Logo size={20} containerShape="none" />
	</button>
	<div
		class="w-[2px] bg-cyan-500 my-1 transition-all duration-200 ease-linear {activeContent === ''
			? 'ml-auto'
			: 'ml-0'}"
	/>
	{#each items as item, i}
		<button
			class="text-[0.8rem] py-1 px-2 cursor-pointer hover:bg-cyan-600 rounded-md transition-all duration-200 ease-linear"
			on:click={() => setActiveContent(item.contentKey)}
		>
			{item.label}
		</button>

		{#if i !== items.length - 1}
			<div
				class="w-[2px] bg-cyan-500 my-1 transition-all duration-200 ease-linear {activeContent ===
				item.contentKey
					? 'ml-auto'
					: 'ml-0'}"
			/>
		{/if}
	{/each}
</nav>

<!-- <div class="mx-auto w-[200px]">
	<nav class="flex flex-col gap-3">
		{#each items as item}
			<div class="flex flex-row gap-3 group cursor-pointer h-[25px]">
				<span
					class="h-[1px] my-auto w-[30px] group-hover:w-[60px] bg-black/50 group-hover:bg-black dark:bg-white/50 dark:group-hover:bg-white transition-all duration-150 ease-linear"
				/>
				<span
					class="text-black/50 group-hover:text-black dark:text-white/50 dark:group-hover:text-white transition-all duration-150 ease-linear text-[0.8rem] my-auto"
				>
					{item.label.toUpperCase()}
				</span>
			</div>
		{/each}
	</nav>
</div> -->
