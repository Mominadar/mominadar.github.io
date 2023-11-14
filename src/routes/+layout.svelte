<script lang="ts">
	import 'uno.css';
	import NavMenu from '$lib/components/NavMenu/NavMenu.svelte';
	import '$lib/index.scss';
	import { onHydrated, theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';

	export const prerender = true;

	onMount(() => onHydrated());
</script>

<div class={`w-[100%] body contents ${$theme ? 'theme-dark' : 'theme-light'}`}>
	<NavMenu />
	<slot />
	<!-- <UIcon icon="i-carbon-arrow-up" classes="text-1.3em p-[0.8rem] border-solid-red absolute m-auto bottom-0 right-0" /> -->
</div>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 0px 0px;
	}

	.body {
		margin: 0px;
		background-color: var(--main);
		color: var(--main-text);
		font-family: var(--text-f);
		transition-duration: 200ms;

		letter-spacing: 1px;

		min-height: 100vh;
	}

	:global(p) {
		margin: 0px;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		margin: 5px 0px;
	}
</style>
