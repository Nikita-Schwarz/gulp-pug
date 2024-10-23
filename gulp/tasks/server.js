import { distPath } from '../config/paths.js';
import { plugins } from '../config/plugins.js';

function server() {
	plugins.browserSync.init({
		server: {
			baseDir: distPath,
		},
		logLevel: 'info',
		cors: true,
		notify: false,
		open: false,
		reloadOnRestart: true,
		port: 3000,
	});
}

export { server };
