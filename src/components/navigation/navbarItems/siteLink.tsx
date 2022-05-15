/* eslint-disable @next/next/no-img-element */
import * as nextUI from '@nextui-org/react';
import config from '@config';

export function SiteLink() {
	return (
		<>
			<nextUI.Text css={{ textGradient: '$gradient', display: 'inline-block', userSelect: 'none' }} weight="bold" h1>
				<nextUI.Link href={`${config.prefix}/`}>Dunkirk</nextUI.Link>
			</nextUI.Text>
		</>
	);
}