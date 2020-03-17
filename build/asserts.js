// export const CACHE_GROUPS = {
// 	Header: {
// 		name: 'Header',
// 		test: /components\/Header/,
// 		chunks: 'all',
// 		priority: 10, //
// 		enforce: true // ignore minSize & minChunks & maxAsyncRequests & maxInitialRequests options and always create chunks
// 	},
// 	Footer: {
// 		name: 'Footer',
// 		test: /components\/Footer/,
// 		chunks: 'all',
// 		priority: 10, //
// 		enforce: true //
// 	}
// };

// export default {
// 	CACHE_GROUPS
// };

module.exports = {
	CACHE_GROUPS: {
		Header: {
			name: 'Header',
			test: /components\/Header/,
			chunks: 'all',
			priority: 10, //
			enforce: true // ignore minSize & minChunks & maxAsyncRequests & maxInitialRequests options and always create chunks
		},
		Footer: {
			name: 'Footer',
			test: /components\/Footer/,
			chunks: 'all',
			priority: 10, //
			enforce: true //
		}
		// vendor: {
		// 	name: 'vendor',
		// 	chunks: 'all', // async module or not
		// 	test: /[\\/]node_modules[\\/]/,
		// 	priority: -10, //
		// 	enforce: true //
		// }
	}
};
