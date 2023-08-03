<script lang="ts">
	import viewport from '../../../actions/useViewportAction';
	import Section from '../Section.svelte';
	import { currentContentStore } from '../../../store';
	import type { ExperienceProjectType } from '../../../types';
	import Project from './Project.svelte';

	import gymrev from '../../../assets/img/gym-revenue.png';
	import bracu from '../../../assets/img/bracu.png';
	import eveneer from '../../../assets/img/eveneer.png';
	import techynaf from '../../../assets/img/techynaf-technologies-ltd.png';
	import Logo from '../../../assets/icons/Logo.svelte';
	import Modal from '../../Modal/Modal.svelte';
	import CloseIcon from '../../../assets/icons/CloseIcon.svelte';
	import ProjectDetail from './ProjectDetail.svelte';

	const contentKey: string = 'projects';
	let setCurrentContentKey: () => void = () => {
		currentContentStore.set(contentKey);
	};

	let projects: ExperienceProjectType[] = [
		{
			name: 'Billing Engine',
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
			company: 'Gym Revenue',
			company_logo: gymrev
		},
		{
			name: 'Inventory Management',
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
			company: 'Gym Revenue',
			company_logo: gymrev
		},
		{
			name: 'Point of Sales',
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
			company: 'Gym Revenue',
			company_logo: gymrev
		},
		{
			name: 'Service Agreements',
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
			company: 'Gym Revenue',
			company_logo: gymrev
		},
		{
			name: 'Calendar and Scheduling',
			description: '',
			features: [
				'Calendar and event management',
				'Class/Task/Event/Services scheduling',
				'Attendee management'
			],
			type: 'module',
			source: 'closed',
			company: 'Gym Revenue',
			company_logo: gymrev
		},
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
			company: 'Eveneer',
			company_logo: eveneer
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
			company: 'Eveneer',
			company_logo: eveneer
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
			company: 'Eveneer',
			company_logo: eveneer
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
			company: 'Eveneer',
			company_logo: eveneer
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
			company: 'Eveneer',
			company_logo: eveneer
		},
		{
			name: 'Beep',
			description:
				'Beep is a parking lot management and parking spot subscription system which connects with IoT devices to detect free spots',
			features: [
				'IoT based empty spot detection',
				'Self subscription and booking',
				'Automated payment for services availed'
			],
			type: 'software',
			source: 'closed'
		},
		{
			name: 'Mongol Tori',
			description:
				'This is a CMS website for the Mars Rover project of Brac University made by ROBU club',
			url: 'https://github.com/Mobashir-Monim/mongol-tori',
			features: [
				'Sponsor management',
				'Faculty advisor management',
				'Blog and photo galary',
				'Team members management'
			],
			type: 'software',
			source: 'open'
		},
		{
			name: 'Land Reg',
			description:
				'Land reg is a prototype software for a new blockchain consensus protocol (Council Protocol) which is a DPoS for land registry system in Bangladesh',
			url: 'https://github.com/Mobashir-Monim/land-reg',
			features: [
				'Land owner verification',
				'Blockchain network management',
				'Land registration',
				'Land ownership transfer',
				'Block generation using Council Protocol'
			],
			type: 'software',
			source: 'open'
		},
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
			company: 'Techynaf',
			company_logo: techynaf
		},
		{
			name: 'Connect',
			description: 'A application collection and tracking platform for scholarships',
			features: [],
			type: 'software',
			source: 'closed',
			company: 'Techynaf',
			company_logo: techynaf
		},
		{
			name: 'Huddle',
			description: 'A routine scheduling and HRMS tool for cafes',
			features: [],
			type: 'software',
			source: 'closed',
			company: 'Techynaf',
			company_logo: techynaf
		},
		{
			name: 'Alfred',
			description: 'A requisition management system for ready made garmet factory',
			features: [],
			type: 'software',
			source: 'closed',
			company: 'Techynaf',
			company_logo: techynaf
		}
	];

	let pagiated: Array<ExperienceProjectType[]> = [];
	let currentPage: number = 0;
	let selectedProject: ExperienceProjectType | null = null;
	const selectProject = (project: ExperienceProjectType | null): void => {
		selectedProject = project;

		setTimeout(() => {
			openModal();
		}, 100);
	};

	const setCurrentPage = (page: number): void => {
		currentPage = page;
	};

	for (let i = 0; i < projects.length; i++) {
		if (i % 5 === 0) pagiated.push([]);

		pagiated[pagiated.length - 1].push(projects[i]);
	}

	let openModal: () => void;
	let closeModal: () => void;
</script>

<Section {contentKey}>
	<div
		class="flex flex-row gap-5 h-full justify-center my-10"
		use:viewport
		on:enterViewport={setCurrentContentKey}
	>
		<div class="flex flex-col gap-6 w-full text-[0.9rem] max-h-[calc(100%-50px)] justify-between">
			<div class="flex flex-col gap-6">
				{#each pagiated[currentPage] as project, index}
					<Project
						{project}
						{selectProject}
						{index}
						isSelected={selectedProject?.name === project.name}
					/>
				{/each}
			</div>

			<div class="flex flex-row justify-center md:justify-end w-full h-auto">
				<div class="flex flex-row gap-1">
					{#each pagiated as group, index}
						<button
							on:click={() => setCurrentPage(index)}
							class="p-2 transit {currentPage === index
								? 'bg-emerald-400/30'
								: 'bg-emerald-400'} rounded-full font-mono text-[0.8rem] border-2 hover:bg-emerald-400/30 border-emerald-400"
						>
							{index + 1}
						</button>
					{/each}
				</div>
			</div>
		</div>
	</div>
</Section>
<Modal bind:open={openModal} bind:close={closeModal}>
	<Section contentKey="experience-{selectedProject?.name}">
		<div class="w-full h-auto glassy-box !rounded-tr-none relative p-5 md:p-10 bg-indigo-500/30">
			<button
				class="transit absolute top-[-15px] right-[-15px] rounded-xl w-[34px] h-[34px] bg-rose-500 hover:bg-rose-500/30 border-2 border-rose-500"
				on:click={closeModal}
			>
				<CloseIcon size={30} classes="fill-white absolute top-0 left-0" />
			</button>

			<ProjectDetail project={selectedProject} />
		</div>
	</Section>
</Modal>
