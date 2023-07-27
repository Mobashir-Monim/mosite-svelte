<script lang="ts">
	import Logo from '../../assets/icons/Logo.svelte';
	import { currentContentStore } from '../../store';
	import type { NavItemType } from '../../types';

	export let items: NavItemType[];
	let currentContent: string;
	currentContentStore.subscribe((value) => {
		currentContent = value;
	});
</script>

<nav
	class="flex flex-row justify-center gap-10 absolute bottom-0 left-0 md:left-[calc(50%-250px)] w-full md:w-[500px] rounded-t-full bg-gradient-to-b from-indigo-500 h-[50px] py-2"
>
	{#each items as item}
		<svelte:component
			this={item.icon}
			size={34}
			classes="fill-white hover:fill-amber-400 cursor-pointer my-auto"
			containerShape="none"
			svgBoxClasses="my-auto"
		/>
	{/each}
</nav>
