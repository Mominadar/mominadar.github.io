<script lang="ts">
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import ProjectList from '$lib/components/ProjectList.svelte';
	import { TITLE_SUFFIX } from '$lib/params';
	import { HOME, getPlatfromIcon } from '$lib/params';
	import MY_SKILLS from '$lib/skills.params';
	import { isEmail, useTitle } from '$lib/utils/helpers';
	import SkillList from '$lib/components/SkillList.svelte';
	import ExperienceList from '$lib/components/ExperienceList.svelte';
	import BlogList from '$lib/components/BlogList.svelte';
	import ContactMe from '$lib/components/ContactMe.svelte';
	const { description, lastName, links, name, title, skills } = HOME;
</script>

<svelte:head>
	<title>{useTitle(title, TITLE_SUFFIX)}</title>
</svelte:head>
<div
    id="about" class="col self-center flex-1 md:flex-col md:slef-stretch justify-center lg:justify-between items-center p-y-8rem p-x-3rem lg:p-x-5rem m-auto"
>
	<div class="md:flex-1 gap-10px">
		<MainTitle classes="md:text-left ">{name} {lastName}</MainTitle>
		<p class="text-[var(--tertiary-text)]  text-center md:text-left text-[1.2em] font-extralight">
			{description}
		</p>
		<div class="row justify-center md:justify-start p-y-15px p-x-0px gap-2">
			{#each links as link}
				<a
					class="decoration-none"
					href={`${isEmail(link.link) ? 'mailto:' : ''}${link.link}`}
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon={getPlatfromIcon(link.platform)} color={'var(--accent-text)'} size={'20px'} />
				</a>
			{/each}
		</div>
	</div> 
	<SkillList items={skills ?? MY_SKILLS} />
	<ProjectList/>
	<BlogList/>
	<ExperienceList/>
	<ContactMe />
</div>
