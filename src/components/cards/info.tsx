import { Builder } from '@utils/cardBuilder';

export function Info() {
	return Builder(
		'Information About the Port at Dunkirk',
		`
			The port of Dunkirk is located at the northernmost point of France. On the east, there is the Strait of Dover, the shortest
			path into British territory from there, which will be the place where the evacuating soldiers are trying to get to. Keep in mind,
			the Strait of Dover can be 20 miles wide, so it isn't very easy to swim over.

			The allies tactical standpoint was bad too, German soldiers were almost surrounding the port, but thankfully didn't launch
			an attack. They feared the Allied had something up their sleeves, and were ready and prepared for an attack. They were dead
			wrong, and this tactical blunder was, what many historians argue, cost them the war.
		`,
		[
			{
				src: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Strait_of_Dover_map.png',
				title: 'The Strait of Dover'
			}
		]
	);
}