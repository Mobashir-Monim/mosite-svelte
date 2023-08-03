<script lang="ts">
	import '../app.css';
	import NavList from '../components/NavList/NavList.svelte';
	import { currentContentStore } from '../store';

	let currentContent: string;
	currentContentStore.subscribe((value) => {
		currentContent = value;
	});
</script>

<slot />
<div class="relative">
	<NavList />
</div>
