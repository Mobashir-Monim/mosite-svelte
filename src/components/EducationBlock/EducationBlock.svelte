<script lang="ts">
	import EducationIcon from '../../assets/icons/EducationIcon.svelte';

	export let education: string;
</script>

<div class="flex flex-row gap-5">
	<span class="my-auto">
		<EducationIcon size={25} />
	</span>
	<span class="my-auto line-clamp-1">
		{education}
	</span>
</div>
