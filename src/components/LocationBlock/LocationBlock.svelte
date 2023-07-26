<script lang="ts">
	import Location from '../../assets/icons/LocationIcon.svelte';
	import type { LocationType } from '../../types';

	export let location: LocationType;
</script>

<div class="flex flex-row gap-5">
	<span class="my-auto">
		<Location circle={true} size={25} />
	</span>
	<span class="my-auto">
		{location.city}, {location.country}
	</span>
</div>
