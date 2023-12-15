<script>
	import { BottomNav, BottomNavItem } from 'flowbite-svelte';
	import { HomeSolid, WalletSolid } from 'flowbite-svelte-icons';
</script>

<BottomNav position="relative" navType="card" classInner="grid-cols-3" class="flex">
	<BottomNavItem btnName="Home" href="/home">
		<HomeSolid
			class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
		/>
	</BottomNavItem>
	<BottomNavItem btnName="Notes" href="/notes">
		<WalletSolid
			class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
		/>
	</BottomNavItem>
	<BottomNavItem btnName="Profile" href="/profile">
		<WalletSolid
			class="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
		/>
	</BottomNavItem>
</BottomNav>
