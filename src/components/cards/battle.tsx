import { Builder } from '@utils/cardBuilder';

export function Battle() {
	return Builder(
		'The Battle of Dunkirk',
		`
			On May 10th, 1940, eight months after Britain and France had declared war on Germany,
			Nazi Germany invaded the Netherlands and Belgium in a "Lightning War" attack.
			Soon after, the German forces invaded France, but while the Allies expected them to enter
			at the Maginot Line, they came though the Ardennes Forest and made their way toward the English
			Channel. While advancing, they cut the Allies' communication, pushing almost all of the 
			British Army into a small beach, Dunkirk. By the 19th, the commanding officer in charge of 
			those troops was considering the possibility of evacuating Dunkirk to save them from 
			the Nazi Troops.


			On May 24th, Hitler gave the order to stop advancing on Dunkirk. He did this because he was worried
			that the Allies would have prepared a counterattack. He allowed his troops to continue on the 26th, but by 
			then, most preparations for evacuation had been made.
		`,
		[
			{
				src: 'https://cdn.britannica.com/87/207287-050-7C087A31/map-invasion-German-Low-Countries-France-1940.jpg',
				title: 'The Battle of Dunkirk'
			}
		]
	);
}