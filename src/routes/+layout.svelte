<script lang="ts">
	import '../app.css';
	import AccountIcon from '../assets/icons/AccountIcon.svelte';
	import EducationIcon from '../assets/icons/EducationIcon.svelte';
	import Logo from '../assets/icons/Logo.svelte';
	import ProjectIcon from '../assets/icons/ProjectIcon.svelte';
	import WorkIcon from '../assets/icons/WorkIcon.svelte';
	import NavList from '../components/NavList/NavList.svelte';
	import { currentContentStore } from '../store';
	import type { NavItemType } from '../types';

	let currentContent: string;
	currentContentStore.subscribe((value) => {
		currentContent = value;
	});

	let items: NavItemType[] = [
		{
			label: 'About',
			icon: AccountIcon,
			contentKey: 'about'
		},
		{
			label: 'Experience',
			icon: WorkIcon,
			contentKey: 'experience'
		},
		{
			label: 'Landing',
			icon: Logo,
			contentKey: 'logo'
		},
		{
			label: 'Projects',
			icon: ProjectIcon,
			contentKey: 'projects'
		},
		{
			label: 'Education',
			icon: EducationIcon,
			contentKey: 'education'
		}
	];
</script>

<slot />

<div class="relative">
	<NavList {items} />
</div>
