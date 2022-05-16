import { Builder } from '@utils/cardBuilder';
import config from '@config';


export function Notes() {
	return Builder(
		'Notes and Comments',
		`
			<h3>What if The British decided not to evacuate?</h3>
			They probably would not have won World War II. Because so many British Troops were on the beach,
			they wouldn't have had nearly enough people to fight the remaining battles. The Allied would have
			fallen and the Germans would have won the war.

			<h3>What if Hitler didn't Delay Advancing by Two Days?</h3>
			If Hitler didn't delay advancing by two days, they would have reached the beach sooner, and the 
			Allies wouldn't have had enough time to prepare to fight back or to evacuate. The Germans would probably have
			won, and we would have lost World War II.

			<h3>The Movie</h3>
			There is a movie about Dunkirk that came out in 2017. I enjoyed the movie and would
			recommend it to anyone who wants to learn more about the events that occurred there.

			<h3>Final Notes</h3>
			The evacuation was a huge success for the Allies. Without our extremely good luck, we would 
			have lost World War II, and Hitler would be in control of the world. Makes you wish that 
			the art school he wanted to go into should have just submitted him when he had the chance. 

			<h3>Credits and Special Thanks</h3>
			Shout out to all the open-source libraries that I used (full list <a href="/osl">here</a>) 
			and my sources are linked in the top right corner (just click the bookmark icon). And yes, 
			the text was intentionally left unselectable, no one will ever be able to copy and paste it 
			into future projects.
		`,
		[
			{
				src: `${config.prefix}/meme.jpg`,
				title: ''
			}
		]
	);
}