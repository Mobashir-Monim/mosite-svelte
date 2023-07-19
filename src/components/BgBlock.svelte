<script lang="ts">
	let rand: number = Math.random();
	export let id: number;
	let times: number[] = [5000, 7000, 10000, 12000, 15000];
	let colors: string[] = [
		// 'shadow-[inset_0px_0px_25px_5px_rgba(43,42,43,0.7)] dark:shadow-[inset_0px_0px_25px_2px_rgba(231,230,245,0.7)]',
		// 'shadow-[inset_0px_0px_25px_5px_rgba(43,41,36,0.7)] dark:shadow-[inset_0px_0px_25px_2px_rgba(245,227,218,0.7)]',
		// 'shadow-[inset_0px_0px_25px_5px_rgba(43,43,36,0.7)] dark:shadow-[inset_0px_0px_25px_2px_rgba(245,240,218,0.7)]',
		// 'shadow-[inset_0px_0px_25px_5px_rgba(38,41,43,0.7)] dark:shadow-[inset_0px_0px_25px_2px_rgba(220,245,244,0.7)]'

		'shadow-[inset_0px_0px_25px_5px_rgba(43,42,43,0.7)] dark:!bg-[#000000]/0',
		'shadow-[inset_0px_0px_25px_5px_rgba(43,41,36,0.7)] dark:!bg-[#000000]/0',
		'shadow-[inset_0px_0px_25px_5px_rgba(43,43,36,0.7)] dark:!bg-[#000000]/0',
		'shadow-[inset_0px_0px_25px_5px_rgba(38,41,43,0.7)] dark:!bg-[#000000]/0'
	];
	$: shadow =
		rand < 0.85
			? 'shadow-[inset_0px_0px_25px_5px_rgba(40,40,43,0.4)] dark:shadow-[inset_0px_0px_25px_2px_rgba(242,243,244,0.3)]'
			: colors[Math.min(Math.floor(Math.random() * colors.length), colors.length - 1)];

	setInterval(() => {
		if (Math.random() < 0.3) {
			rand = Math.random();
		}
	}, times[Math.floor(Math.random() * times.length)]);
</script>

<div
	class="bg-[#F2F3F4] dark:bg-[#28282B] rounded-md {shadow} transform-gpu w-[50px] h-[50px] border-gray-500 transition-all duration-500 ease-linear"
/>
