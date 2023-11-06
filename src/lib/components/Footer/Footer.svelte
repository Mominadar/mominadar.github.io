<script lang="ts">
	import { page } from '$app/stores';
	import { HOME, NavBar } from '$lib/params';
	import { theme, toggleTheme } from '$lib/stores/theme';

	import { base } from '$app/paths';
	import UIcon from '../Icon/UIcon.svelte';

	let currentRoute = '/';

	$: {
		if ($page) {
			currentRoute = $page.url.pathname;

			// console.log(currentRoute);
		}
	}
</script>

<div class="nav-menu">
	<nav class="container !justify-between flex flex-row items-center text-sm">
		<a
			href={`${base}/`}
			class="nav-menu-left decoration-none flex flex-row items-center cursor-pointer px-4 text-[var(--secondary-text)] self-stretch hover:bg-[color:var(--main-hover)]"
		>
			<span class="ml-2 text-md font-bold hidden md:inline">MB</span>
		</a>
	</nav>
</div>

<style lang="scss">
	.nav-menu {
		display: flex;
		justify-content: center;
		position: sticky;
		bottom: 5px;
		z-index: 10;
		padding: 0px 20px;
		border-top: 1px solid var(--secondary);
		background-color: var(--main);
	}
</style>
