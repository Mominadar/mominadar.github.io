import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'Auxcube',
		description: ['In my diverse range of projects, I have leveraged a variety of technologies and skills to create impactful solutions. Most notable acheivements:','- Designed and developed from scratch mobile-first healthcare app using React, Spring Boot, and Firebase for US patients.','- Enhanced performance 5x by converting core SQL procedures into Python scripts with multiprocessing.', '- Created a common Python package for utility functions.', '- Developed a modular ERP app for small-scale startups with a full-fledged accounting system adhering to double-entry accounting principles plus a feature for custom cheque template creation with drag-and-drop functionality.'],
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Islamabad',
		period: { from: new Date('2022-01-01') },
		skills: getSkills('ts', 'python','reactjs','node','java'),
		name: 'Software Engineer @ Auxcube',
		color: '#ffffff',
		links: [{to:'https://www.auxcube.com/',label:'website'}],
		logo: Assets.Auxcube,
		shortDescription: ''
	},
	{
		slug: 'software-freelance',
		company: 'Afiniti',
		description: 'At Afiniti, primarily work on core monitroing service, doing both development and providing product support. Also, worked on a number of MVPs that could be potential game changers for the company. These projects were of varied domains from chatbots to discussion forums to snmp agents.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Islamabad',
		period: { from: new Date() },
		skills: getSkills('ts', 'python','react','node'),
		name: 'Analyst Software Engineer @ Afiniti',
		color: '#ffffff',
		links: [{to:'https://www.afiniti.com/',label:'website'}],
		logo: Assets.Afiniti,
		shortDescription: ''
	},
	{
		slug: 'software-freelance-junior',
		company: 'Self-employed',
		description: 'Built and designed websites for clients of various domains. Implemented web scrapers and other automation tools.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: getSkills('python', 'html', 'js', 'css', 'node'),
		name: 'Freelancer',
		color: '#ffffff',
		links: [],
		logo: Assets.Freelance,
		shortDescription: ''
	}
];

export default MY_EXPERIENCES;
