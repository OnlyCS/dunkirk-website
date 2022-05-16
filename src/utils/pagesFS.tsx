export function pagesFS() {
	/*
		This snippet basically gets json to act like a file system for pages.
		Specifically, it is json with parent objects.
		Trust me, I was *going* to use the fs module.
	*/
	const parenter = {
		set: function (target, prop, value) {
			if (typeof value === 'object') {
				let targetObjectMod;
				let folderData;
				let p;

				if (prop == 'subpages') {
					targetObjectMod = target.parent;
					folderData = { ...target };

					delete folderData.parent;
					delete folderData.subpages;
					delete folderData.folderData;

					p = new Proxy({ parent: targetObjectMod, folderData: folderData }, parenter);
				} else {
					targetObjectMod = target;
					p = new Proxy({ parent: targetObjectMod }, parenter);
				}

				for (let key in value) {
					p[key] = value[key];
				}

				return target[prop] = p;
			} else {
				target[prop] = value;
			}

			return true;
		}
	};

	let root = new Proxy({}, parenter);
	root = [
		{
			type: 'page',
			title: 'Part 1: Info',
			url: '/info'
		},
		{
			type: 'page',
			title: 'Part 2: The Battle',
			url: '/battle'
		},
		{
			type: 'page',
			title: 'Part 3: Operation Dynamo',
			url: '/dynamo'
		},
		{
			type: 'page',
			title: 'Part 4: The Aftermath',
			url: '/aftermath'
		},
		{
			type: 'page',
			title: 'Part 5: Notes and Comments',
			url: '/notes'
		},
		{
			type: 'page',
			title: 'One more thing',
			url: 'https://www.youtube.com/watch?v=-AXetJvTfU0'
		}
	];

	return root;
}