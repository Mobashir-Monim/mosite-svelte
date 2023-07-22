export interface PersonNameType {
	first: string;
	middle?: string;
	last: string;
}

export interface NavItemType {
	label: string;
	contentKey: string;
}

export interface SocialItemType {
	label: "facebook" | "twitter" | "github" | "linkedin";
	link: string;
}
