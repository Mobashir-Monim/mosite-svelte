<script lang="ts">
	import EmailIcon from '../../assets/icons/EmailIcon.svelte';
	import Facebook from '../../assets/icons/socials/Facebook.svelte';
	import Github from '../../assets/icons/socials/Github.svelte';
	import LinkedIn from '../../assets/icons/socials/LinkedIn.svelte';
	import Twitter from '../../assets/icons/socials/Twitter.svelte';
	import type { SocialItemType } from '../../types';
	import SocialsItem from './SocialsItem.svelte';

	export let socialItems: SocialItemType[];
	let socialIconsClasses: string = 'fill-white/50 hover:fill-white';
</script>

<div class="mx-auto w-[200px] mt-auto">
	<div class="flex flex-row gap-3 justify-center">
		{#each socialItems as item}
			<SocialsItem link={item.link}>
				{#if item.label === 'facebook'}
					<Facebook size={30} classes={socialIconsClasses} />
				{:else if item.label === 'twitter'}
					<Twitter size={30} classes={socialIconsClasses} />
				{:else if item.label === 'github'}
					<Github size={30} classes={socialIconsClasses} />
				{:else if item.label === 'linkedin'}
					<LinkedIn size={30} classes={socialIconsClasses} />
				{:else if item.label === 'email'}
					<EmailIcon size={30} classes={socialIconsClasses} circle={true} />
				{/if}
			</SocialsItem>
		{/each}
	</div>
</div>
