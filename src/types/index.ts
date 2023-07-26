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
	contentKey: string;
}

export interface SocialItemType {
	label: 'facebook' | 'twitter' | 'github' | 'linkedin';
	link: string;
}

export type setActiveContentFunctionType = (a: string) => void;

declare global {
    interface Window { MyNamespace: any; }
}