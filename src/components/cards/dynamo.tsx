import { Builder } from '@utils/cardBuilder';

export function Dynamo() {
	return Builder(
		'Operation Dynamo',
		`
			On May 26th, the British stated evacuation of the troops using the codename 'Operation Dynamo'. On the
			first day, only around 7500 men were evacuated. However, around 10,000 got out the next day.
			Since Dunkirk had a very shallow beach, and Royal Navy vessels were getting bombed on the way back to
			Dover, the British Government sent their civilians' boats, many of them fishing boats, to aid in Dunkirk's
			evacuation. This armada became known as the "Little Ships", and it was an armada of over 1,000.

			Churchill only expected to rescue around 45,000 men at most, but 47,000 were evacuated on the 29th, and over
			53,000 left on the 30th. When the evacuations were finished, a total of 338,000 men were evacuated, and
			90,000 were left behind, along with guns and tanks.
		`,
		[
			{
				src: 'https://media.iwm.org.uk/loris/161/765/large_000000.jpg/full/865,/0/default.jpg',
				title: 'Little Ships'
			}
		]
	);
}