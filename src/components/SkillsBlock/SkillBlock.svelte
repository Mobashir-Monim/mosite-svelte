<script lang="ts">
	import type { SkillTagType } from '../../types';
	import SkillTag from './SkillTag.svelte';

	let skills: SkillTagType[] = [
		{
			name: 'PHP',
			type: 'programming-language'
		},
		{
			name: 'Python',
			type: 'programming-language'
		},
		{
			name: 'JavaScript',
			type: 'programming-language'
		},
		{
			name: 'TypeScript',
			type: 'programming-language'
		},
		{
			name: 'ReactJS',
			type: 'technical'
		},
		{
			name: 'VueJS',
			type: 'technical'
		},
		{
			name: 'Svelte',
			type: 'technical'
		},
		{
			name: 'GraphQL',
			type: 'technical'
		},
		{
			name: 'Laravel',
			type: 'technical'
		},
		{
			name: 'HTML',
			type: 'technical'
		},
		{
			name: 'CSS',
			type: 'technical'
		},
		{
			name: 'Tailwind',
			type: 'technical'
		},
		{
			name: 'Capacitor',
			type: 'technical'
		},
		{
			name: 'Software Development',
			type: 'technical'
		},
		{
			name: 'Software Architecture',
			type: 'technical'
		},
		{
			name: 'Blockchain',
			type: 'technical'
		},
		{
			name: 'Cryptography',
			type: 'technical'
		},
		{
			name: 'AWS',
			type: 'technical'
		},
		{
			name: 'Firestore',
			type: 'technical'
		},
		{
			name: 'Scrum Master',
			type: 'general'
		},
		{
			name: 'Mentoring/Teaching',
			type: 'general'
		}
	];
</script>

<div class="flex flex-col gap-5 p-5 glassy-box w-full min-h-[70vh] md:min-h-fit">
	<h1 class="text-[1.2rem] border-b">Skills</h1>
	<div class="flex flex-row gap-3 flex-wrap justify-center my-auto">
		{#each skills as skill}
			<SkillTag {skill} />
		{/each}
	</div>
</div>
