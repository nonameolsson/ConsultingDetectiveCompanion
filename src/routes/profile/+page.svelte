<script lang="ts">
	import { enhance } from '$app/forms';
	import { Page } from '$lib/components';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { Button, DarkMode, Heading, Input, Label, Spinner } from 'flowbite-svelte';
	import { ArrowRightToBracketOutline, MoonSolid, SunSolid } from 'flowbite-svelte-icons';

	export let data;
	export let form;

	let { session, supabase, profile } = data;
	$: ({ session, supabase, profile } = data);

	let profileForm: HTMLFormElement;
	let loading = false;
	let fullName: string = profile?.full_name ?? '';
	let username: string = profile?.username ?? '';

	const handleSubmit: SubmitFunction = () => {
		loading = true;
		return async () => {
			loading = false;
		};
	};

	const handleSignOut: SubmitFunction = () => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			update();
		};
	};
</script>

<Page title="Preferences">
	<Heading tag="h6">Settings</Heading>

	<div>
		<DarkMode>
			<div slot="lightIcon" class="flex dark:text-white">
				<MoonSolid class="me-2" /> Dark Mode enabled
			</div>
			<div slot="darkIcon" class="flex dark:text-white">
				<SunSolid class="me-2" /> Dark Mode disabled
			</div>
		</DarkMode>
	</div>

	<hr class="my-4" />

	<Heading tag="h6">Account</Heading>
	<div class="grid gap-4">
		<form
			class="grid gap-4"
			method="post"
			action="?/update"
			use:enhance={handleSubmit}
			bind:this={profileForm}
		>
			<Label for="email" class="mb2">Email</Label>
			<Input id="email" type="email" value={session.user.email} disabled />

			<Label class="mb2" for="fullName">Full Name</Label>
			<Input id="fullName" name="fullName" type="text" value={form?.fullName ?? fullName} />

			<Label class="space-y-2" for="username">Username</Label>
			<Input id="username" name="username" type="text" value={form?.username ?? username} />

			<Button type="submit" disabled={loading}>
				{#if loading}
					<Spinner class="me-3" size="4" /> Loading ...
				{:else}
					Update
				{/if}
			</Button>
		</form>

		<form class="grid gap-4" method="post" action="?/signout" use:enhance={handleSignOut}>
			<Button class="mt-2" outline disabled={loading}>
				Sign Out
				<ArrowRightToBracketOutline class="w-3.5 h-3.5 ms-2" />
			</Button>
		</form>
	</div></Page
>
