<script lang="ts">
	import { CONTACTME, getPlatfromIcon } from '$lib/params';
	import { isEmail } from '$lib/utils';
	import Icon from './Icon/Icon.svelte';
	import CommonPage from './CommonPage.svelte';
	const { title, links } = CONTACTME ;
	const id = "contact-me";
</script>

<CommonPage {title} {id}>

<div class="carrousel flex-[0.5] row-center">
		<div class="row justify-center md:justify-start p-y-15px p-x-0px gap-20">
			{#each links as link}
				<a
					class="decoration-none"
					href={`${isEmail(link.link) ? 'mailto:' : ''}${link.link}`}
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon={getPlatfromIcon(link.platform)} color={'var(--accent-text)'} size={'35px'} />
				</a>
			{/each}
		</div>
</div>
</CommonPage>

