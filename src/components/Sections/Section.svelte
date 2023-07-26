<script lang="ts">
	export let contentKey: string;
	export let classes: string = '';
</script>

<section id={contentKey} class="w-full h-[100vh] bg-transparent relative snap-start {classes}">
	<div class="flex flex-col h-[100vh] justify-center max-w-[1000px] mx-auto px-5 re">
		<slot />
	</div>
</section>
