<script lang="ts">
	import { List, ListItem, Page } from '$lib/components';
	import { Button } from 'flowbite-svelte';

	export let data;
	console.log(data);

	let notes = Array.from({ length: 30 }, (_, i) => ({
		id: i + 1,
		title: `Note ${i + 1}`,
		content: `Content ${i + 1}`,
		location: `Location ${i + 1}`
	}));
</script>

<Page title="Notes" padding={false}>
	<Button href="note/new">New</Button>

	<List>
		{#each notes as note (note.id)}
			<ListItem title={note.title} description={note.content} location={note.location} />
		{/each}
	</List>
</Page>
