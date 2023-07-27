<script lang="ts">
	import { currentContentStore } from '../../store';
	import type { NavItemType } from '../../types';

	export let items: NavItemType[];
	let currentContent: string;
	currentContentStore.subscribe((value) => {
		currentContent = value;
	});
</script>

<nav
	class="flex flex-row justify-center gap-10 absolute bottom-0 left-0 md:left-[calc(50%-250px)] w-full md:w-[500px] rounded-t-full bg-gradient-to-b from-slate-500 h-[50px] py-2"
>
	{#each items as item}
		<svelte:component this={item.icon} {...item.props} />
	{/each}
</nav>
