import type { SvelteComponent } from 'svelte';
import type AccountIcon from '../assets/icons/AccountIcon.svelte';
import type EducationIcon from '../assets/icons/EducationIcon.svelte';
import type ProjectIcon from '../assets/icons/ProjectIcon.svelte';
import type WorkIcon from '../assets/icons/WorkIcon.svelte';
import type Logo from '../assets/icons/Logo.svelte';

export interface PersonNameType {
	first: string;
	middle?: string;
	last: string;
}

export interface LocationType {
	city: string;
	state?: string;
	country: string;
}

export interface SkillTagType {
	type: 'technical' | 'programming-language' | 'general';
	name: string;
}

export interface NavItemType {
	label: string;
	icon: Omit<typeof SvelteComponent<IconType>, 'prototype'>;
	props: Object;
	contentKey: string;
}

export interface IconType {
	size: number;
	classes: string;
	circle?: boolean;
}

export interface SocialItemType {
	label: 'facebook' | 'twitter' | 'github' | 'linkedin';
	link: string;
}

export type setActiveContentFunctionType = (a: string) => void;
