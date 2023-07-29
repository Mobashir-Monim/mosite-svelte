<script lang="ts">
	export let contentKey: string;
	export let classes: string = '';
</script>

<section
	id={contentKey}
	class="w-full h-[calc(100vh-50px)] bg-transparent relative snap-start mb-[50px] {classes}"
>
	<div
		class="flex flex-col h-[calc(100vh-50px)] justify-center max-w-[1000px] mx-auto px-5 relative"
	>
		<slot />
	</div>
</section>
