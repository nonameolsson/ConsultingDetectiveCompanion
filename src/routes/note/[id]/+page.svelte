<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Page } from '$lib/components';
	import { Button } from 'flowbite-svelte';
	import { AngleLeftSolid } from 'flowbite-svelte-icons';
</script>

<Page title="Sherlocks place">
	<AngleLeftSolid slot="headerLeft" on:click={() => goto('/notes')} />
	<p>Getting information about the case</p>
	<Button href={`${$page.params.id}/edit`}>Edit</Button>
</Page>
