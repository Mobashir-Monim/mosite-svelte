<script lang="ts">
	import Logo from '../../../assets/icons/Logo.svelte';
	import type { LocationType, PersonNameType, SocialItemType } from '../../../types';
	import LocationBlock from '../../LocationBlock/LocationBlock.svelte';

	import NameBlock from '../../NameBlock/NameBlock.svelte';
	import SocialsBlock from '../../SocialsBlock/SocialsBlock.svelte';
	import WorkBlock from '../../WorkBlock/WorkBlock.svelte';

	let name: PersonNameType = {
		first: 'Mobashir',
		last: 'Monim'
	};
	let location: LocationType = {
		city: 'Dhaka',
		country: 'Bangladesh'
	};

	let socialItems: SocialItemType[] = [
		{
			label: 'facebook',
			link: 'https://www.facebook.com/mobashir.monim'
		},
		{
			label: 'twitter',
			link: 'https://twitter.com/M_Monim'
		},
		{
			label: 'github',
			link: 'https://github.com/mobashir-monim'
		},
		{
			label: 'linkedin',
			link: 'https://www.linkedin.com/in/mobashir-monim/'
		}
	];
</script>

<div
	class="flex flex-col gap-5 justify-center w-full md:w-[35%] rounded-3xl p-8 shadow-[5px_5px_20px_5px_rgba(23,23,23,0.5)] min-h-[45vh] max-h-[450px]"
>
	<div class="h-[60px] overflow-hidden">
		<Logo
			size={130}
			svgBoxClasses="mx-auto fill-none -mt-[34px]"
			containerShape="none"
			solidShapeClasses="stroke-white fill-white"
			outlineShapeClasses="stroke-white/50"
		/>
	</div>
	<NameBlock {name} />
	<LocationBlock {location} />
	<WorkBlock work="Fullstack Web Developer" />
	<SocialsBlock {socialItems} />
</div>
