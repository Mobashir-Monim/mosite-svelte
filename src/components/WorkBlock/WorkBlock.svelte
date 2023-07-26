<script lang="ts">
	import WorkIcon from '../../assets/icons/WorkIcon.svelte';

	export let work: string;
</script>

<div class="flex flex-row gap-5">
	<span class="my-auto">
		<WorkIcon size={25} />
	</span>
	<span class="my-auto">
		{work}
	</span>
</div>
