<script lang="ts">
	import { currentContentStore } from '../../store';
	import type { NavItemType } from '../../types';

	export let items: NavItemType[];
	let currentContent: string;
	currentContentStore.subscribe((value) => {
		currentContent = value;
	});

	const scrollIntoView = (id: string) => {
		const el = document.querySelector(id);
		currentContentStore.set(id.replace('#', ''));

		if (!el) return;
        
		el.scrollIntoView({
			behavior: 'smooth'
		});
	};
</script>

<nav
	class=" absolute bottom-0 left-0 md:left-[calc(50%-250px)] w-full md:w-[500px] rounded-t-full bg-gradient-to-b from-slate-500 h-[50px] py-2 px-10"
>
	<div class="flex flex-row justify-center gap-10 w-full">
		{#each items as item}
			<a
				href="#{item.contentKey}"
				on:click|preventDefault={() => scrollIntoView(`#${item.contentKey}`)}
				class="my-auto"
			>
				<svelte:component this={item.icon} {...item.props} />
			</a>
		{/each}
	</div>
</nav>
