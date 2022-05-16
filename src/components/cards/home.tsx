import { Builder } from '@utils/cardBuilder';

export function Home() {
	return Builder(
		'Welcome',
		`
			Welcome to my history project website. In this website you will learn about the events and evacuation at Dunkirk. 
			This website will also cover what would have happened if Britain failed the Dunkirk evacuation.
		`,
		[]
	);
}