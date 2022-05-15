import * as nextUI from '@nextui-org/react';
import { ButtonNav } from '@utils/buttonNav';
import ReactHtmlParser from 'react-html-parser';

export function Builder(title: string, text: string, images: { src: string, title: string }[]) {
	return (
		<nextUI.Card css={{ marginTop: '3em', userSelect: 'none', width: '78%', marginLeft: '19%', height: '80%' }} hoverable>
			<nextUI.Card.Header>
				<nextUI.Text h3>{title}</nextUI.Text>
			</nextUI.Card.Header>

			<nextUI.Divider />

			<nextUI.Card.Body css={{ display: 'inline-block' }}>
				<div style={{ display: 'inline-block', width: (images.length > 0) ? '68%' : 'auto', verticalAlign: 'top' }}>
					<nextUI.Text>
						{ReactHtmlParser(
							text
								.replace(/\n\n/g, '<br /><br />')
								.replace('\t', '')
								.replace('\n', '')
						)}
					</nextUI.Text>
				</div>

				{images.map((image, index) => (
					<nextUI.Card key={index} css={{ width: '28%', display: 'inline-block', marginLeft: '3em' }} cover>
						<nextUI.Card.Body>
							<nextUI.Card.Image src={image.src} />
						</nextUI.Card.Body>
						{(image.title) ? (
							<nextUI.Card.Footer css={{ position: 'absolute', bgBlur: '#121212', borderTop: '$borderWeights$light solid rgba(0, 0, 0, 0.2)', bottom: 0, zIndex: 1 }} blur>
								{image.title}
							</nextUI.Card.Footer>
						) : (
							<nextUI.Card.Footer />
						)}
					</nextUI.Card>
				))}
			</nextUI.Card.Body>

			<nextUI.Divider />

			<nextUI.Card.Footer>
				<ButtonNav />
			</nextUI.Card.Footer>
		</nextUI.Card>
	);
}