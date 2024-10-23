import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';

import { logger, plugins } from '../config/plugins.js';
import { paths } from '../config/paths.js';

function images() {
	return app.gulp
		.src(paths.images.src, { encoding: false })
		.pipe(logger.handleError(' IMAGES '))
		.pipe(plugins.newer(paths.images.build))
		.pipe(plugins.if(app.isBuild, webp())) // конвертирует в webp
		.pipe(plugins.if(app.isBuild, app.gulp.dest(paths.images.build))) // записывает
		.pipe(
			plugins.if(
				app.isBuild,
				app.gulp.src(paths.images.src, { encoding: false })
			)
		)
		.pipe(plugins.if(app.isBuild, plugins.newer(paths.images.build)))
		.pipe(
			plugins.if(
				app.isBuild,
				imagemin({
					progressive: true,
					svgoPlugins: [{ removeViewBox: false }],
					interlaced: true,
					optimizationLevel: 3, // 0 to 7
				})
			)
		)
		.pipe(app.gulp.dest(paths.images.build))
		.pipe(plugins.browserSync.stream());
}

export { images };
