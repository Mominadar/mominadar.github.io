import MY_BLOGS from './blogs.params';
import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams,
	type ContactPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Slick template with Svelte';

export const NavBar = {
	home: 'Home',
	projects: 'Projects',
	career: 'Experience',
	resume: 'Resume',
	skills: 'Skills',
	about:'About'

};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
	}
};

const links = [
	{
		platform: Platform.Email,
		link: 'mominababar97@gmail.com'
	},
	{ platform: Platform.GitHub, link: 'https://github.com/Mominadar' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/mominababardar/'
	},
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/users/14307094/mbd'
	},

]

export const HOME: HomePageParams = {
	title: 'Momina Babar',
	name: 'Hi, I\'m Momina',
	lastName: 'Babar',
	description: 'I\'m a seasoned Full Stack Developer with three years of experience, navigating the dynamic landscapes of both greenfield and legacy systems. My technical arsenal includes Python, React, TypeScript, SQL, and Java, empowering me to drive projects from inception to planning to deployment, complete with meticulous testing and ongoing product support. I\'m fueled by a relentless passion for innovative problem-solving and the thrill of constructing cutting edge solutions. I\'m on a constant quest for new challenges and am excited to be a part of pioneering projects.',
	links: links
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const BLOGS: ProjectPageParams = {
	title: 'Blogs',
	items: MY_BLOGS
};

export const CONTACTME: ContactPageParams = {
	title: 'Reach out to me at:',
	links: links
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experience',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: ''
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};
