import * as nextUI from '@nextui-org/react';
import { FaBookmark } from 'react-icons/fa';

export function Icons() {
	return (
		<nextUI.Grid.Container gap={2}>
			<nextUI.Grid>
				<nextUI.Tooltip content='MyBib'>
					<nextUI.Link css={{ color: '$text' }} href='https://www.mybib.com/j/ScaryCapriciousDuck'>
						<FaBookmark size={'1.5em'} />
					</nextUI.Link>
				</nextUI.Tooltip>
			</nextUI.Grid>
		</nextUI.Grid.Container>
	);
}