<script lang="ts">
	import AccountIcon from '../../assets/icons/AccountIcon.svelte';
	import EducationIcon from '../../assets/icons/EducationIcon.svelte';
	import Logo from '../../assets/icons/Logo.svelte';
	import ProjectIcon from '../../assets/icons/ProjectIcon.svelte';
	import WorkIcon from '../../assets/icons/WorkIcon.svelte';
	import type { NavItemType } from '../../types';
	import { currentContentStore } from '../../store';

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

	let items: NavItemType[] = [
		{
			label: 'About',
			icon: AccountIcon,
			contentKey: 'about',
			props: {
				size: 34,
				classes:
					'fill-white/80 hover:fill-emerald-400 hover:drop-shadow-[0px_0px_5px_rgba(52,211,153,1)] cursor-pointer my-auto'
			}
		},
		{
			label: 'Experience',
			icon: WorkIcon,
			contentKey: 'experience',
			props: {
				size: 34,
				classes:
					'fill-white/80 hover:fill-emerald-400 hover:drop-shadow-[0px_0px_5px_rgba(52,211,153,1)] cursor-pointer my-auto'
			}
		},
		{
			label: 'Landing',
			icon: Logo,
			contentKey: 'hero',
			props: {
				size: 68,
				containerShape: 'none',
				svgBoxClasses: 'my-auto group cursor-pointer',
				outlineShapeClasses:
					'stroke-white/80 fill-none group-hover:stroke-emerald-400 group-hover:drop-shadow-[0px_0px_5px_rgba(52,211,153,1)]',
				solidShapeClasses:
					'stroke-white/80 fill-white/80 group-hover:stroke-emerald-400 group-hover:fill-emerald-400 stroke-2 group-hover:drop-shadow-[0px_0px_5px_rgba(52,211,153,1)]'
			}
		},
		{
			label: 'Projects',
			icon: ProjectIcon,
			contentKey: 'projects',
			props: {
				size: 34,
				classes:
					'fill-white/80 hover:fill-emerald-400 hover:drop-shadow-[0px_0px_5px_rgba(52,211,153,1)] cursor-pointer my-auto'
			}
		},
		{
			label: 'Education',
			icon: EducationIcon,
			contentKey: 'education',
			props: {
				size: 34,
				classes:
					'fill-white/80 hover:fill-emerald-400 hover:drop-shadow-[0px_0px_5px_rgba(52,211,153,1)] cursor-pointer my-auto'
			}
		}
	];
</script>

<nav
	class="absolute top-[calc(100%-50px)] left-0 md:left-[calc(50%-250px)] w-full md:w-[500px] md:rounded-full bg-slate-500/60 md:bg-gradient-to-b md:from-slate-500 h-[50px] py-2 px-10 z-30"
>
	<div class="flex flex-row justify-around md:justify-center gap-6 md:gap-10 w-full my-auto">
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
