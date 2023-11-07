import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'slick-npm-package',
		color: '#5e95e3',
		description:
			'A type-safe package allows users to mock progress on the front-end. The package exposes a hook that allow users to mock progress on client side with multiple configuration options',
		shortDescription:
			'Mock progress in React using typescript hook.',
		links: [{ to: 'https://www.npmjs.com/package/mock-progress-react', label: 'npm' }],
		logo: Assets.Npm,
		name: 'Mock Progress',
		period: {
			from: new Date('2022-06-30'),
			to: new Date('2022-08-30')
		},
		skills: getSkills('ts','reactjs'),
		type: 'NPM Package'
	},
	{
		slug: 'slick-illnessrx',
		color: '#5e95e3',
		description:
			'A type-safe package allows users to mock progress on the front-end. The package exposes a hook that allow users to mock progress on client side with multiple configuration options',
		shortDescription:
			'Web application for medical students to group study and collaborate on papers, presentations etc.',
		links: [{ to: 'https://www.npmjs.com/package/mock-progress-react', label: 'npm' }],
		logo: Assets.TypeScript,
		name: 'IllnessRx',
		period: {
			from: new Date('2022-12-01'),
			to: new Date('2023-10-01')
		},
		skills: getSkills('js','reactjs','sass','node'),
		type: 'Web Application'
	},
	{
		slug: 'slick-class-diagram',
		color: '#5e95e3',
		description:
			'A type-safe package allows users to mock progress on the front-end. The package exposes a hook that allow users to mock progress on client side with multiple configuration options',
		shortDescription:
			'Create Class diagrams using an intuitive interface built using reactflow.',
		links: [{ to: 'https://github.com/Mominadar/class-diagram-generator', label: 'npm' }],
		logo: Assets.TypeScript,
		name: 'Class Diagram Generator',
		period: {
			from: new Date('2022-07-01'),
			to: new Date('2022-10-02')
		},
		skills: getSkills('ts','reactjs','tailwind','next'),
		type: 'Web Application'
	}
];

export default MY_PROJECTS;
