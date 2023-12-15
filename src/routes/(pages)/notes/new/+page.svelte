<script lang="ts">
	import { Page } from '$lib/components';
	import { Button, Input, Label, Textarea } from 'flowbite-svelte';
	import { Section } from 'flowbite-svelte-blocks';
	import { AngleLeftSolid } from 'flowbite-svelte-icons';

	const handleSubmit = () => {
		alert('Form submited.');
	};
</script>

<Page title="New note">
	<AngleLeftSolid slot="headerLeft" />

	<Section name="crudcreateform">
		<form on:submit={handleSubmit}>
			<div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
				<div class="sm:col-span-2">
					<Label for="name" class="mb-2">Title</Label>
					<Input type="text" id="name" placeholder="Your title here" required />
				</div>
				<div class="sm:col-span-2">
					<Label for="description" class="mb-2">Description</Label>
					<Textarea
						id="description"
						placeholder="Your description here"
						rows="4"
						name="description"
						required
					/>
				</div>
				<Button href="/notes">Cancel</Button>
				<Button type="submit" class="w-32">Add note</Button>
			</div>
		</form>
	</Section>
</Page>
