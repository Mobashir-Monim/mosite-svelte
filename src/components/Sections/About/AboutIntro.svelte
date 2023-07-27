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
	class="flex flex-col gap-5 !justify-center w-full md:w-[35%] rounded-3xl p-8 shadow-[5px_5px_20px_5px_rgba(23,23,23,0.5)] min-h-[45vh] max-h-[450px]"
>
	<Logo
		size={130}
		svgBoxClasses="mx-auto fill-none"
		containerShape="none"
		solidShapeClasses="stroke-white fill-white"
		outlineShapeClasses="stroke-white/50"
	/>
	<NameBlock {name} />
	<div class="flex flex-col gap-2 mt-auto">
		<LocationBlock {location} />
		<WorkBlock work="Fullstack Web Developer" />
		<EducationBlock education="BSc. Computer Science Engineering" />
	</div>
</div>
