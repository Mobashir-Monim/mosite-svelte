<script lang="ts">
	let isOpen: boolean = false;

	export const open = (): void => {
		isOpen = true;
	};

	export const close = (): void => {
		isOpen = false;
	};
</script>

<div
	class="fixed top-0 left-0 bg-black/50 z-50 w-full overflow-hidden {isOpen
		? 'h-full'
		: 'h-[0%]'} backdrop-blur-md transit"
>
	<slot />
</div>
