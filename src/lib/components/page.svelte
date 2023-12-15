<script lang="ts">
	import { BottomNavigation } from '$lib/components';
	import { Heading, Navbar } from 'flowbite-svelte';
	export let title = '';
</script>

<div class="flex flex-col h-full">
	<Navbar class="py-2 px-4 w-full z-20 top-0 left-0 border-b">
		<div class="flex items-center">
			{#if $$slots.headerLeft}
				<div class="mr-2">
					<slot name="headerLeft" />
				</div>
			{/if}
			<Heading tag="h4">{title}</Heading>
		</div>
	</Navbar>

	<div class="p-4 overflow-y-scroll h-full">
		<slot />
	</div>

	<BottomNavigation />
</div>
