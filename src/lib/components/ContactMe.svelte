<script lang="ts">
	import { CONTACTME, getPlatfromIcon } from '$lib/params';
	import { isEmail } from '$lib/utils';
	import Icon from './Icon/Icon.svelte';
	import CommonPage from './CommonPage.svelte';
	const { title, links } = CONTACTME;
	const id = 'contact-me';
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
	<h6
			class={`font-[var(--title-f)] font-black tracking-[4px] mt-[6rem] text-center text-1em sm:text-[1em] md:text-[1em] lg:text-[1em]`}
			style="background: linear-gradient(var(--main-text), var(--accent-text-hover)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;"
		>
			Thanks for dropping by!
		</h6>
</CommonPage>
