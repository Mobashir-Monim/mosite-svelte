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
		class="flex flex-col-reverse md:flex-row gap-10 md:gap-16 justify-between mb-10"
		use:viewport
		on:enterViewport={setCurrentContentKey}
	>
		<div
			class="w-full md:w-[40%] md:mb-auto text-[0.8rem] text-justify flex flex-col gap-8 justify-between h-full"
		>
			<div class="glassy-box md:min-h-[30vh] flex flex-col p-5">
				<h3 class="border-b-2 text-[1.2rem]">Experience</h3>
				<p class="mt-5 md:my-auto">
					I started my dev career at the end of 2016 during as a college student and instantly fell
					in love with development. Since then, I have developed several software (solo and in a
					team).
				</p>
			</div>

			<a
				href="mailto:mobashirmonim@gmail.com"
				class="py-2 rounded-full text-center bg-blue-500 hover:bg-emerald-300/50 transition-all duration-300 ease-linear shadow-[2px_2px_10px_2px_rgba(23,23,23,0.5)] hover:shadow-[0px_0px_0px_2px_rgba(52,211,153,1)]"
			>
				Want to talk?
			</a>
		</div>
		<div class="flex flex-col gap-8 w-full md:w-[60%] pr-5 justify-around h-full">
			{#each expereinces as expereince}
				<Experience {expereince} />
			{/each}
		</div>
	</div>
</Section>
