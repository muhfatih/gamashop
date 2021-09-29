// craco.config.js
// const path = require(`path`);

// const alias = (prefix = `src`) => ({
// 	'@pages': `${prefix}/pages`,
// 	'@components': `${prefix}/components`,
// 	'@styles': `${prefix}/styles`,
// 	'@utils': `${prefix}/utils`,
// });

// const SRC = `./src`;
// const aliases = alias(SRC);

// const resolvedAliases = Object.fromEntries(
//   Object.entries(aliases).map(([key, value]) => [key, path.resolve(__dirname, value)]),
// );

module.exports = {
	// webpack: {
	// 	alias: resolvedAliases,
	// },
	style: {
		postcss: {
		plugins: [
			require('tailwindcss'),
			require('autoprefixer'),
		],
		},
	},
}
