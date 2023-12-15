<script lang="ts">
	import { A, Li } from 'flowbite-svelte';

	export let title: string;
	export let description: string | undefined;
	export let location: string | undefined;
</script>

<Li class="px-2 py-3">
	<A class="flex items-center space-x-4 rtl:space-x-reverse" href="/note/1">
		<div class="flex-1 min-w-0">
			<p class="text-sm font-medium text-gray-900 truncate dark:text-white">{title}</p>
			<p class="text-sm text-gray-500 truncate dark:text-gray-400">
				{description}
			</p>
		</div>
		<div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
			{location}
		</div>
	</A>
</Li>

<style lang="postcss">
</style>
