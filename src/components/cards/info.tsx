import { Builder } from '@utils/cardBuilder';

export function Info() {
	return Builder(
		'Information About the Port at Dunkirk',
		`
			The port of Dunkirk is located at the northernmost point of France. The Strait of Dover is on the East, 
			which is the shortest path into British territory. It can be 20 miles wide, so it isn't 
			possible to swim over.

			The allies' tactical standpoint was bad. German soldiers surrounded the port, but thankfully didn't launch
			an attack. They feared the Allies were prepared for one. They were wrong, and this tactical blunder might have
			been the one that costed them the war.
		`,
		[
			{
				src: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Strait_of_Dover_map.png',
				title: 'The Strait of Dover'
			}
		]
	);
}