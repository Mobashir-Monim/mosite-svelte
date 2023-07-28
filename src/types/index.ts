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
	icon: ConstructorOfATypedSvelteComponent;
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

export interface RangeTimeType {
	month: string;
	year: string;
}

export interface ExperienceProjectType {
	name: string;
	description: string;
	url?: string;
	type: 'research' | 'software' | 'module' | 'package';
	source: 'open' | 'closed';
	company: string;
}

export interface ExperienceType {
	company: string;
	position: string;
	start: RangeTimeType;
	end?: RangeTimeType;
	company_info: string;
	logo: string;
	work_description: string;
	works: ExperienceProjectType[];
}
