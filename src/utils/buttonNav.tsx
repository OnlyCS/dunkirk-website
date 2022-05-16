import * as nextUI from '@nextui-org/react';
import { useRouter } from 'next/router';
import { pagesFS } from '@utils/pagesFS';

export function ButtonNav() {
	const pagesList = ['/', ...pagesFS().map((page) => page.url)];

	const router = useRouter();
	const currentPage = router.pathname;
	const currentPageIndex = pagesList.indexOf(currentPage);

	const nextPage = (currentPageIndex + 1 > pagesList.length - 1) ? 'disable' : pagesList[currentPageIndex + 1];
	const prevPage = (currentPageIndex - 1 < 0) ? 'disable' : pagesList[currentPageIndex - 1];

	const goToNextPage = (e) => {
		e.preventDefault();
		router.push(nextPage);
	};

	const goToPrevPage = (e) => {
		e.preventDefault();
		router.push(prevPage);
	};

	return (
		<>
			{
				(pagesList.includes(router.pathname)) ? (
					<>
						<nextUI.Button color='secondary' css={{ width: '49%', marginRight: '2em' }} size='lg' {...prevPage != 'disable' ? { onClick: goToPrevPage } : { disabled: true }}>
							Back
						</nextUI.Button>
						<nextUI.Button css={{ width: '49%' }} size='lg' {...nextPage != 'disable' ? { onClick: goToNextPage } : { disabled: true }}>
							Next {nextPage.startsWith('https://') ? '(One more thing)' : ''}
						</nextUI.Button>
					</>
				) : (
					null
				)
			}
		</>
	);
}