<script lang="ts">
	export let contentKey: string;
	export let classes: string = '';
	export let divClasses: string = '';
</script>

<section
	id={contentKey}
	class="w-full h-screen shrink-0 bg-transparent relative snap-start flex flex-col justify-start {classes}"
>
	<div
		class="flex flex-col h-[calc(100vh-50px)] justify-center w-full max-w-[1000px] mx-auto px-5 relative {divClasses}"
	>
		<slot />
	</div>
</section>
