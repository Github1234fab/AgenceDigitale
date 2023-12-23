
import adapter from '@sveltejs/adapter-static';

// export default {
// 	kit: {
// 		adapter: adapter({
// 			// default options are shown. On some platforms
// 			// these options are set automatically — see below
// 			pages: 'build',
// 			assets: 'build',
// 			fallback: '200.html' ,
// 			precompress: false,
// 			strict: true
// 		})
// 	}
// };

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	}
};

export default config;

// export default config;
