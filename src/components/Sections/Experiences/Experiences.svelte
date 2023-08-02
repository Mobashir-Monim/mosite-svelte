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
	import ExperienceDetail from './ExperienceDetail.svelte';
	import Modal from '../../Modal/Modal.svelte';
	import CloseIcon from '../../../assets/icons/CloseIcon.svelte';

	const contentKey: string = 'experience';
	let setCurrentContentKey: () => void = () => {
		currentContentStore.set(contentKey);
	};

	let experiences: ExperienceType[] = [
		{
			company: 'Gym Revenue',
			position: 'Full stack dev',
			start: {
				month: 'Nov',
				year: '2022'
			},
			company_info:
				'Gym Revenue is a cloud-based SaaS product for Gym Owners & Operators to cut costs, save time and amplify resources while growing their business. It is a all-in-one gym management tool.',
			logo: gymrev,
			work_description:
				'As member of the development team at Gym Revenue, I have taken ownership of several features/modules as well as worked on features/modules owned by other developers. My usual work revolves around development, however I help out other members whenever they ask.',
			works: [
				{
					name: 'Billing Engine Module',
					description:
						'The billing engine module provides services for all client end billing related functions from members',
					features: [
						'Support for multiple payment processor vendors',
						'Support for multiple card, ach or cash payments',
						'Recurring payments/billing',
						'Automated payment retries',
						'Manual payment retries',
						'Late fee calculation',
						'Automated late fee calculation',
						'Invoice generation',
						'Payment status tracking',
						'Payment attempts tracking',
						'Location based sales tax application',
						'Automated sales tax update'
					],
					type: 'module',
					source: 'closed',
					company: 'Gym Revenue'
				},
				{
					name: 'Inventory Management Module',
					description:
						'The module enables maangement of inventories based on location, item category, item and brand',
					features: [
						'Support for product categories, product and inventory for analytics',
						'Support for inventory cost analytics',
						'Support for inventory sales analytics',
						'Support for inventory profit analytics'
					],
					type: 'module',
					source: 'closed',
					company: 'Gym Revenue'
				},
				{
					name: 'Point of Sales module',
					description:
						'The point of sales module enables the sale of inventory, subscription and services as well as discount',
					features: [
						'Discounts management',
						'Sales return/refund',
						'Subscription sales',
						'Services sales',
						'Inventory sales'
					],
					type: 'module',
					source: 'closed',
					company: 'Gym Revenue'
				},
				{
					name: 'Service Agreements Module',
					description:
						'This module allows for management of terms of existing and new services/subscriptions, and their billing',
					features: [
						'Agreement Template builder',
						'Agreement Managment',
						'Contract Template management',
						'Billing dates management',
						'Annual dues management',
						'Enrollment fee management'
					],
					type: 'module',
					source: 'closed',
					company: 'Gym Revenue'
				},
				{
					name: 'Calendar and Scheduling Module',
					description: '',
					features: [
						'Calendar and event management',
						'Class/Task/Event/Services scheduling',
						'Attendee management'
					],
					type: 'module',
					source: 'closed',
					company: 'Gym Revenue'
				}
			]
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
			company_info:
				"Brac University (BracU) established in 2001 is located in Dhaka Bangladesh. BracU follows a liberal arts approach to education which nurtures fresh ideas and gives new impetus to the field of tertiary education. It ensures a high quality of education and aims to meet the demands of contemporary times. Building on BRAC's experience of seeking solutions to challenges posed by extreme poverty, BracU hopes to instill in its students a commitment to working towards national development and progress.",
			logo: bracu,
			work_description:
				'As a lecturer, my primary responsibility was to teach courses, and since my specialization is in software development, I was responsible for teaching and coordinating the Software Engineering course. At the same time, as a software developer, I had maintained some of the systems in place as well as developed new ones according to what was asked of by the department',
			works: [
				{
					name: 'Bout',
					description:
						'Bout is a faculty evaluation analysis and management and student information management software',
					url: 'https://github.com/Mobashir-Monim/bout',
					features: [
						'Feature access permissioning system',
						'Evaluation analysis and distribution tool',
						'Evaluaation results analysis',
						'Student information store',
						'Course and section management'
					],
					type: 'software',
					source: 'open',
					company: 'Eveneer'
				},
				{
					name: 'Boutv2',
					description:
						'The version 2 of bout was made to possess similar features to bout, however was developed with react and firebase and included some additional feature',
					url: 'https://github.com/Mobashir-Monim/boutv2-frontend',
					features: [
						'Feature access permissioning system',
						'Evaluation analysis and distribution tool',
						'Evaluaation results analysis',
						'Student information store',
						'Course and section management',
						'Evaulation collection management',
						'Anonymous evaulation collection',
						'Form builder tool for evaluation collection',
						'Thesis registration management'
					],
					type: 'software',
					source: 'open',
					company: 'Eveneer'
				},
				{
					name: 'Busso (SSO)',
					description: 'Busso is a SSO which supports generic SAML and OIDC based authentication',
					url: 'https://github.com/Mobashir-Monim/bracu-sso',
					features: [
						'Supports SAML based authentication',
						'Supports OIDC based authentication',
						'Access logs',
						'Data Change logs',
						'Email based access control',
						'Role based access control',
						'Service provider management'
					],
					type: 'software',
					source: 'open',
					company: 'Eveneer'
				},
				{
					name: 'Blober',
					description: 'This software is a mysql query testing platform',
					url: 'https://github.com/Mobashir-Monim/blober',
					features: [
						'Randomized question from select question pool for timed tests',
						'Randomized question from select question pool for assignments',
						'Randomized question for practice'
					],
					type: 'software',
					source: 'open',
					company: 'Eveneer'
				}
			]
		},
		{
			company: 'Eveneer',
			position: 'Tech Wizard',
			start: {
				month: 'Dec',
				year: '2018'
			},
			company_info:
				'Eveneer is a company that I started to accept contract work to fund my research and hobbies. It does not always accept clients and is very selective of its clientele',
			logo: eveneer,
			work_description: '',
			works: [
				{
					name: 'Bout',
					description:
						'Bout is a faculty evaluation analysis and management and student information management software',
					url: 'https://github.com/Mobashir-Monim/bout',
					features: [
						'Feature access permissioning system',
						'Evaluation analysis and distribution tool',
						'Evaluaation results analysis',
						'Student information store',
						'Course and section management'
					],
					type: 'software',
					source: 'open',
					company: 'Eveneer'
				},
				{
					name: 'Boutv2',
					description:
						'The version 2 of bout was made to possess similar features to bout, however was developed with react and firebase and included some additional feature',
					url: 'https://github.com/Mobashir-Monim/boutv2-frontend',
					features: [
						'Feature access permissioning system',
						'Evaluation analysis and distribution tool',
						'Evaluaation results analysis',
						'Student information store',
						'Course and section management',
						'Evaulation collection management',
						'Anonymous evaulation collection',
						'Form builder tool for evaluation collection',
						'Thesis registration management'
					],
					type: 'software',
					source: 'open',
					company: 'Eveneer'
				},
				{
					name: 'Busso (SSO)',
					description: 'Busso is a SSO which supports generic SAML and OIDC based authentication',
					url: 'https://github.com/Mobashir-Monim/bracu-sso',
					features: [
						'Supports SAML based authentication',
						'Supports OIDC based authentication',
						'Access logs',
						'Data Change logs',
						'Email based access control',
						'Role based access control',
						'Service provider management'
					],
					type: 'software',
					source: 'open',
					company: 'Eveneer'
				},
				{
					name: 'Blober',
					description: 'This software is a mysql query testing platform',
					url: 'https://github.com/Mobashir-Monim/blober',
					features: [
						'Randomized question from select question pool for timed tests',
						'Randomized question from select question pool for assignments',
						'Randomized question for practice'
					],
					type: 'software',
					source: 'open',
					company: 'Eveneer'
				},
				{
					name: 'LightSaml',
					description:
						'LightSaml Implements basic SAML 2.0 data model classes, serialization/deserialization to/from xml with XML security and certificates support, and message encapsulations to bindings. This was forked form qikker-online/lightSAML',
					url: 'https://github.com/Mobashir-Monim/lightsaml',
					features: [
						'Basic SAML 2.0 data model classes',
						'Serialization/deserialization to/from xml with XML security',
						'Certificates support',
						'Message encapsulations to bindings'
					],
					type: 'package',
					source: 'open',
					company: 'Eveneer'
				}
			]
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
			company_info:
				'Techynaf is a software agency which builds for its clients. Its services ranges from web app development to testing, deployment and maintenance',
			logo: techynaf,
			work_description: '',
			works: [
				{
					name: 'Ecube',
					description: 'A CMS and eCommerce site for Ecube Entertainment',
					features: [
						'Event registration and ticket sell',
						'Equipment rental services',
						'Product sell',
						'Sales analytics',
						'Delivery tracking'
					],
					type: 'software',
					source: 'closed',
					company: 'Techynaf'
				},
				{
					name: 'Connect',
					description: 'A application collection and tracking platform for scholarships',
					features: [],
					type: 'software',
					source: 'closed',
					company: 'Techynaf'
				},
				{
					name: 'Huddle',
					description: 'A routine scheduling and HRMS tool for cafes',
					features: [],
					type: 'software',
					source: 'closed',
					company: 'Techynaf'
				},
				{
					name: 'Alfred',
					description: 'A requisition management system for ready made garmet factory',
					features: [],
					type: 'software',
					source: 'closed',
					company: 'Techynaf'
				}
			]
		}
	];

	let selectedExperience: ExperienceType | null = null;
	const setSelectedExperience = (experience: ExperienceType | null): void => {
		selectedExperience = experience;

		setTimeout(() => {
			openModal();
		}, 100);
	};

	let openModal: () => void;
	let closeModal: () => void;
</script>

<Section {contentKey}>
	<div
		class="flex flex-col md:flex-row gap-10 justify-between mb-10 md:mb-0 transit"
		use:viewport
		on:enterViewport={setCurrentContentKey}
	>
		<div
			class="w-full flex flex-col gap-8 justify-between transit md:max-h-[545px] md:w-[45%] md:mb-auto text-[0.8rem] h-full text-justify"
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
				class="hidden md:block py-2 rounded-full text-center bg-blue-500 hover:bg-emerald-300/50 transit shadow-[2px_2px_10px_2px_rgba(23,23,23,0.5)] hover:shadow-[0px_0px_0px_2px_rgba(52,211,153,1)]"
			>
				Want to talk?
			</a>
		</div>
		<div
			class="flex flex-wrap md:flex-nowrap md:flex-col gap- md:gap-12 w-full md:w-[55%] md:pr-5 justify-between md:justify-around shrink-0 transit"
		>
			{#each experiences as experience, index}
				<Experience
					{experience}
					isSelected={selectedExperience?.company === experience.company}
					{setSelectedExperience}
					{index}
				/>
			{/each}
		</div>
	</div>
</Section>
<Modal bind:open={openModal} bind:close={closeModal}>
	<Section contentKey="experience-{selectedExperience?.company}">
		<div class="w-full h-auto glassy-box !rounded-tr-none relative p-5 md:p-10 bg-cyan-500/30">
			<button
				class="transit absolute top-[-15px] right-[-15px] rounded-xl w-[34px] h-[34px] bg-rose-500 hover:bg-rose-500/30 border-2 border-rose-500"
				on:click={closeModal}
			>
				<CloseIcon size={30} classes="fill-white absolute top-0 left-0" />
			</button>

			<ExperienceDetail experience={selectedExperience} />
		</div>
	</Section>
</Modal>
