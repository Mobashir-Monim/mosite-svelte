<script lang="ts">
	import Logo from '../../../assets/icons/Logo.svelte';
	import type { LocationType, PersonNameType } from '../../../types';
	import EducationBlock from '../../EducationBlock/EducationBlock.svelte';
	import LocationBlock from '../../LocationBlock/LocationBlock.svelte';
	import NameBlock from '../../NameBlock/NameBlock.svelte';
	import WorkBlock from '../../WorkBlock/WorkBlock.svelte';

	let name: PersonNameType = {
		first: 'Mobashir',
		last: 'Monim'
	};
	let location: LocationType = {
		city: 'Dhaka',
		country: 'Bangladesh'
	};
</script>

<div
	class="flex flex-col gap-5 glassy-box !justify-center w-full md:w-[35%] p-5 min-h-[50vh] max-h-[450px]"
>
	<Logo
		size={130}
		svgBoxClasses="mx-auto fill-none"
		containerShape="none"
		solidShapeClasses="stroke-white fill-white"
		outlineShapeClasses="stroke-white"
	/>
	<NameBlock {name} />
	<div class="flex flex-col gap-2 mt-auto">
		<LocationBlock {location} />
		<WorkBlock work="Fullstack Web Developer" />
		<EducationBlock education="BSc. Computer Science Engineering" />
		<a
			href="mailto:mobashirmonim@gmail.com"
			class="py-1.5 rounded-full text-center bg-blue-500 hover:bg-emerald-300/50 transit shadow-[2px_2px_10px_2px_rgba(23,23,23,0.5)] hover:shadow-[0px_0px_0px_2px_rgba(52,211,153,1)]"
		>
			Want to talk?
		</a>
	</div>
</div>
