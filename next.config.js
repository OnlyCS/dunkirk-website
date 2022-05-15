/** @type {import('next').NextConfig} */
const config = require('./src/config.json');
const path = require('path');

module.exports = {
	webpack: (config) => {
		config.experiments = {
			topLevelAwait: true,
			layers: true,
		};
		config.resolve.alias = {
			...config.resolve.alias,
			"@components": path.resolve(__dirname, 'src/components'),
            "@theme": path.resolve(__dirname, 'src/theme'),
            "@css": path.resolve(__dirname, 'src/css'),
            "@config": path.resolve(__dirname, 'src/config.json'),
			"@utils": path.resolve(__dirname, 'src/utils'),
		}

		return config;
	},
	basePath: config.prefix,
	assetPrefix: config.prefix,
};
