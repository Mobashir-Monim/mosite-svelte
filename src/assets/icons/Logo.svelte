<script lang="ts">
	export let svgBoxClasses: string = 'fill-none';
	export let size: number = 100;
	export let containerShape: string = 'rect';
	export let containerClasses: string = 'stroke-white !fill-none';
	export let outlineShapeClasses: string = 'fill-none stroke-white';
	export let solidShapeClasses: string = 'stroke-white fill-white';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size / 2}
	viewBox="0 0 520 520"
	class="transition-all duration-300 ease-linear {svgBoxClasses}"
>
	<!-- <rect
		x="38.1666"
		y="12.7008"
		width="38.7661"
		height="2"
		rx="1"
		transform="rotate(60 38.1666 12.7008)"
		class="transition-all duration-300 ease-linear {outlineShapeClasses}"
	/>
	<rect
		x="39.1646"
		y="13.6994"
		width="38.8577"
		height="2"
		rx="1"
		transform="rotate(120 39.1646 13.6994)"
		class="transition-all duration-300 ease-linear {outlineShapeClasses}"
	/>
	<rect
		x="37.5126"
		y="47.113"
		width="26.7185"
		height="2"
		rx="1"
		transform="rotate(-120 37.5126 47.113)"
		class="transition-all duration-300 ease-linear {outlineShapeClasses}"
	/>
	<rect
		x="62.9112"
		y="1.68448"
		width="51.4972"
		height="2"
		rx="1"
		transform="rotate(60 62.9112 1.68448)"
		class="transition-all duration-300 ease-linear stroke-2 {solidShapeClasses}"
	/>
	<rect
		x="51.1446"
		y="24.7923"
		width="25.7895"
		height="2"
		rx="1"
		transform="rotate(120 51.1446 24.7923)"
		class="transition-all duration-300 ease-linear {outlineShapeClasses}"
	/>
	<rect
		x="63.9093"
		y="2.68301"
		width="26.0111"
		height="2"
		rx="1"
		transform="rotate(120 63.9093 2.68301)"
		class="transition-all duration-300 ease-linear stroke-2 {solidShapeClasses}"
	/>
	<rect
		x="38.1666"
		y="1.70083"
		width="51.4972"
		height="2"
		rx="1"
		transform="rotate(60 38.1666 1.70083)"
		class="transition-all duration-300 ease-linear stroke-2 {solidShapeClasses}"
	/>
	<rect
		x="39.1646"
		y="2.69937"
		width="51.4987"
		height="2"
		rx="1"
		transform="rotate(120 39.1646 2.69937)"
		class="transition-all duration-300 ease-linear stroke-2 {solidShapeClasses}"
	/> -->

	<rect
		width="115.822"
		height="499.991"
		rx="57.9112"
		transform="matrix(0.88334 0.468733 -0.453146 0.891436 407.689 10)"
		class="transition-all duration-300 ease-linear stroke-2 {solidShapeClasses}"
	/>
	<rect
		x="388.003"
		y="42.5239"
		width="90.2863"
		height="446.154"
		rx="45.1432"
		stroke-width="25"
		class="transition-all duration-300 ease-linear {outlineShapeClasses}"
	/>
	<rect
		x="16.7064"
		y="5.28256"
		width="90.8226"
		height="472.546"
		rx="45.4113"
		transform="matrix(0.883305 -0.468799 0.45321 0.891403 9.55545 74.8822)"
		stroke-width="25"
		class="transition-all duration-300 ease-linear {outlineShapeClasses}"
	/>
	<rect
		x="29.6436"
		y="30.0239"
		width="115.286"
		height="471.154"
		rx="57.6432"
		class="transition-all duration-300 ease-linear stroke-2 {solidShapeClasses}"
	/>

	{#if containerShape !== 'none'}
		{#if containerShape === 'circle'}
			<rect x="0.5" y="0.5" width="99" height="99" rx="49.5" class={containerClasses} />
		{:else}
			<rect x="0.5" y="0.5" width="99" height="99" class={containerClasses} />
		{/if}
	{/if}
</svg>
