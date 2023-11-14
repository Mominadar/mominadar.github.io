import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_BLOGS: Array<Project> = [
	{
		slug: 'slick-portfolio-angular',
		color: '#5e95e3',
		description:
			'Discussing a way to gather device model information from browser for analytics',
		shortDescription:
			'Discussing a way to gather device model information from browser for analytics',
		links: [{ to: 'https://dev.to/mominababar1/retrieving-device-model-information-with-javascript-from-browsers-l4c', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Retrieving Device Model Information with JavaScript from Browsers',
		period: {
			from: new Date('2023-10-25')
		},
		skills: getSkills('ts'),
		type: ''
	}
];

export default MY_BLOGS;
