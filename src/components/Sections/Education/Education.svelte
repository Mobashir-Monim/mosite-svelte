<script lang="ts">
	import Section from '../Section.svelte';

	const contentKey: string = 'education';
</script>

<Section {contentKey}>
	<div class="flex flex-col gap-8">
		<div class="glassy-box w-full h-full p-5 flex flex-col gap-10">
			<h1 class="border-b text-[1.5rem]">Degrees</h1>
			<ul>
				<li>
					<div class="flex flex-col">
						<h3 class="text-[0.9rem]">BSc in Computer Scince</h3>
						<span class="text-[0.7rem]">Brac University, Dhaka, Bangladesh</span>
						<span class="text-[0.7rem]">Jan 2016 - Dec 2019</span>
					</div>
				</li>
			</ul>
		</div>
		<div class="glassy-box w-full h-full p-5 flex flex-col gap-10">
			<h1 class="border-b text-[1.5rem]">Publications</h1>
			<ul>
				<li>
					<div class="flex flex-col">
						<h3 class="text-[0.9rem]">
							Blockchain based Land Registry with Delegated Proof of Stake (DPoS) Consensus in
							Bangladesh
						</h3>
						<span class="text-[0.7rem]">IEEE Region 10 Symposium (TENSYMP)</span>
						<span class="text-[0.7rem]">2020</span>
					</div>
				</li>
			</ul>
		</div>
		<div class="glassy-box w-full h-full p-5 flex flex-col gap-10">
			<h1 class="border-b text-[1.5rem]">Certifications</h1>
			<ul>
				<li>
					<div class="flex flex-col">
						<h3 class="text-[0.9rem]">Certified Scrum Master</h3>
						<span class="text-[0.7rem]">Scrum Alliance</span>
						<span class="text-[0.7rem]">Jan 2022 - Jan 2024</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</Section>

<style lang="postcss">
    ul {
        list-style-position: outside;
        
    }
	li {
		@apply ml-5 md:ml-10;
		list-style-type: disc !important;
	}
	li::marker {
		@apply h-full flex flex-col justify-center;
	}
</style>
