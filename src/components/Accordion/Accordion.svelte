<script lang="ts">
	import ChevronIcon from '../../assets/icons/ChevronIcon.svelte';
	import type { AccordionContentType } from '../../types';

	export let accordionContent: AccordionContentType[];
	let currentContent: string | undefined = undefined;
</script>

<div class="flex flex-col gap-3">
    <h2 class="text-[1.2rem] border-b-2 py-1">
        <ChevronIcon size={30} classes="fill-white my-auto" direction="down" />
        <span class="inline-block my-auto"> Company Profile </span>
    </h2>
    <!-- <p class="">{experience.company_info}</p> -->
</div>
