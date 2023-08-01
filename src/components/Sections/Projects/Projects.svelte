<script lang="ts">
	import viewport from '../../../actions/useViewportAction';
	import Section from '../Section.svelte';
	import { currentContentStore } from '../../../store';
	import type { ExperienceProjectType } from '../../../types';
	import Project from './Project.svelte';
	import MediaQuery from '../../../MediaQuery.svelte';
	// import Experience from './Experience.svelte';

	const contentKey: string = 'projects';
	let setCurrentContentKey: () => void = () => {
		currentContentStore.set(contentKey);
	};

	let projects: ExperienceProjectType[] = [
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
		},
		{
			name: 'Beep',
			description:
				'Beep is a parking lot management and parking spot subscription system which connects with IoT devices to detect free spots',
			url: 'https://github.com/Mobashir-Monim/beep',
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
	];
</script>

<Section {contentKey}>
	<div
		class="flex flex-col md:flex-row gap-5 h-full justify-center"
		use:viewport
		on:enterViewport={setCurrentContentKey}
	>
		<div
			class="flex flex-row flex-wrap my-auto gap-5 md:gap-10 w-full py-5 px-8 text-[0.9rem] justify-around md:w-[60%] max-h-[calc(100%-50px)] md:max-h-[80vh] overflow-y-auto no-scroll-bar rounded-3xl"
		>
			{#each projects as project}
				<Project {project} />
			{/each}
		</div>
		<div
			class="text-[0.8rem] text-justify hidden md:flex flex-col gap-8 justify-between h-full w-full md:w-[40%] my-auto max-h-[90vh] md:max-h-[80vh] py-5 px-8"
		>
			asa
		</div>
	</div>
</Section>
