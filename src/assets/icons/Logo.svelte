<script lang="ts">
	export let containerShape: string = 'rect';
	export let size: number = 100;
	export let outlineShapeClasses: string = 'stroke-black fill-none dark:stroke-white';
	export let solidShapeClasses: string = 'stroke-black fill-black dark:stroke-white';
	export let containerClasses: string = 'stroke-black dark:stroke-white !fill-none';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	viewBox="0 0 100 100"
	fill="none"
>
	<rect
		x="63.9093"
		y="27.683"
		width="51.3191"
		height="2"
		rx="1"
		transform="rotate(120 63.9093 27.683)"
		class={outlineShapeClasses}
	/>
	<rect
		x="38.1666"
		y="37.7008"
		width="38.7661"
		height="2"
		rx="1"
		transform="rotate(60 38.1666 37.7008)"
		class={outlineShapeClasses}
	/>
	<rect
		x="39.1646"
		y="38.6994"
		width="38.8577"
		height="2"
		rx="1"
		transform="rotate(120 39.1646 38.6994)"
		class={outlineShapeClasses}
	/>
	<rect
		x="37.5126"
		y="72.113"
		width="26.7185"
		height="2"
		rx="1"
		transform="rotate(-120 37.5126 72.113)"
		class={outlineShapeClasses}
	/>

	<rect
		x="38.1666"
		y="26.7008"
		width="51.4972"
		height="2"
		rx="1"
		transform="rotate(60 38.1666 26.7008)"
		class={solidShapeClasses}
	/>
	<rect
		x="39.1646"
		y="27.6994"
		width="51.4987"
		height="2"
		rx="1"
		transform="rotate(120 39.1646 27.6994)"
		class={solidShapeClasses}
	/>

	<rect
		x="62.9112"
		y="26.6845"
		width="51.4972"
		height="2"
		rx="1"
		transform="rotate(60 62.9112 26.6845)"
		class={solidShapeClasses}
	/>
	<rect
		x="63.9093"
		y="27.683"
		width="26.0111"
		height="2"
		rx="1"
		transform="rotate(120 63.9093 27.683)"
		class={solidShapeClasses}
	/>

	{#if containerShape === 'circle'}
		<rect x="0.5" y="0.5" width="99" height="99" rx="49.5" class={containerClasses} />
	{:else}
		<rect x="0.5" y="0.5" width="99" height="99" class={containerClasses} />
	{/if}
</svg>
