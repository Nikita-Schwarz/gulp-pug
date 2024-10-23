import gulp from 'gulp';
import { paths } from './gulp/config/paths.js';

// Импорт задач
import { reset } from './gulp/tasks/reset.js';
import { favicon } from './gulp/tasks/favicon.js';
import { createSvgSprite } from './gulp/tasks/createSvgSprite.js';
import { pug } from './gulp/tasks/pug.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { server } from './gulp/tasks/server.js';

global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	gulp,
};

function watcher() {
	gulp.watch(paths.pages.watch, pug);
	gulp.watch(paths.scss.watch, scss);
	gulp.watch(paths.images.watch, images);
	gulp.watch(paths.js.watch, js);
	gulp.watch(paths.sprite.watch, createSvgSprite);
	gulp.watch(paths.favicon.watch, favicon);
}

const mainTasks = gulp.parallel(
	favicon,
	createSvgSprite,
	pug,
	scss,
	js,
	images
);

const dev = gulp.series(reset, mainTasks, gulp.parallel(server, watcher));
const build = gulp.series(reset, mainTasks);

export default dev;

export { build };
