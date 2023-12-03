<script>
	import { BottomNavigation } from '$lib/components';
	import { pageTitle } from '$lib/stores';
	import { Heading, Navbar } from 'flowbite-svelte';
	import '../app.pcss';
</script>

<Navbar class="fixed py-2 px-4 w-full z-20 top-0 left-0 border-b">
	<Heading tag="h4">{$pageTitle}</Heading>
</Navbar>

<slot />

<BottomNavigation />
