<script lang="ts">
	import viewport from '../../../actions/useViewportAction';
	import Section from '../Section.svelte';
	import { currentContentStore } from '../../../store';
	import gymrev from '../../../assets/img/gym-revenue.png';
	import bracu from '../../../assets/img/bracu.png';
	import eveneer from '../../../assets/img/eveneer.png';
	import techynaf from '../../../assets/img/techynaf-technologies-ltd.png';
	import type { ExperienceType } from '../../../types';
	import Experience from './Experience.svelte';

	const contentKey: string = 'experience';
	let setCurrentContentKey: () => void = () => {
		currentContentStore.set(contentKey);
	};

	let expereinces: ExperienceType[] = [
		{
			company: 'Gym Revenue',
			position: 'Full stack dev',
			start: {
				month: 'Nov',
				year: '2022'
			},
			company_info: '',
			logo: gymrev,
			work_description: '',
			works: []
		},
		{
			company: 'Brac University',
			position: 'Lecturer & Software Dev',
			start: {
				month: 'Jan',
				year: '2020'
			},
			end: {
				month: 'May',
				year: '2023'
			},
			company_info: '',
			logo: bracu,
			work_description: '',
			works: []
		},
		{
			company: 'Eveneer',
			position: 'Tech Wizard',
			start: {
				month: 'Dec',
				year: '2018'
			},
			company_info: '',
			logo: eveneer,
			work_description: '',
			works: []
		},
		{
			company: 'Techynaf',
			position: 'Backend Developer',
			start: {
				month: 'Dec',
				year: '2016'
			},
			end: {
				month: 'Jul',
				year: '2019'
			},
			company_info: '',
			logo: techynaf,
			work_description: '',
			works: []
		}
	];
</script>

<Section {contentKey}>
	<div
		class="flex flex-col md:flex-row gap-10 md:gap-16 justify-between"
		use:viewport
		on:enterViewport={setCurrentContentKey}
	>
		<div class="w-full md:w-[40%] my-auto text-[0.8rem] text-justify">
			I started my dev career at the end of 2016 during as a college student and instantly fell
			in love with development. Since then, I have developed several software (solo and in a team).
		</div>
		<div class="flex flex-col gap-12 w-full md:w-[60%] p-5 pl-0">
			{#each expereinces as expereince}
				<Experience {expereince} />
			{/each}
		</div>
	</div>
</Section>
