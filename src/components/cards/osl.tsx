import { Builder } from '@utils/cardBuilder';


export function OSL() {
	return Builder(
		'Open Source Libraries and Used Products',
		`
			- <a href="https://reactjs.org/" target="_blank">React</a>						<br />
			- <a href="https://nextjs.org/" target="_blank">Next.js</a>						<br />
			- <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>		<br />
			- <a href="https://nextui.org/" target="_blank">NextUI</a>						<br />
			- <a href="https://react-icons.netlify.com/" target="_blank">React Icons</a>	<br />
		`,
		[]
	);
}