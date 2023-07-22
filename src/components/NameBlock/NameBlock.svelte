<script lang="ts">
	import type { PersonNameType } from '../../types';

	export let name: PersonNameType;
</script>

<h2
	class="mx-auto text-[1.5rem] text-center font-light !tracking-widest drop-shadow-[0px_0px_5px_rgba(96,165,250,1)] dark:drop-shadow-[0px_0px_5px_rgba(5,150,105,1)]"
>
	<span class="font-semibold text-[2rem]">{name.first[0].toUpperCase()}</span>{name.first.slice(1)}
	{#if name.middle}
		<span class="font-semibold text-[2rem]">{name.middle[0].toUpperCase()}</span>.
	{/if}
	<span class="font-semibold text-[2rem]">{name.last[0].toUpperCase()}</span>{name.last.slice(1)}
</h2>
