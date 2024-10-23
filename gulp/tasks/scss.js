import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';
import postcssGroupMedia from 'postcss-sort-media-queries';
import webpcss from 'webpcss';
import GulpCleanCss from 'gulp-clean-css';
import rename from 'gulp-rename';

import { paths } from '../config/paths.js';
import { logger, plugins } from '../config/plugins.js';

const sass = gulpSass(dartSass);

function scss() {
	const webpConfig = {
		webpClass: '.webp',
		noWebpClass: '.no-webp',
	};

	return app.gulp
		.src(paths.scss.src)
		.pipe(logger.handleError(' SCSS '))
		.pipe(plugins.if(app.isDev, sourcemaps.init()))
		.pipe(sass())
		.pipe(
			plugins.if(
				app.isBuild,
				postcss([
					autoprefixer(),
					postcssPresetEnv(),
					postcssGroupMedia({ sort: 'desktop-first' }),
					webpcss.default,
				])
			)
		)
		.pipe(plugins.if(app.isBuild, GulpCleanCss({ level: 2 })))
		.pipe(rename({ suffix: '.min', extname: '.css' }))
		.pipe(plugins.if(app.isDev, sourcemaps.write('.')))
		.pipe(app.gulp.dest(paths.scss.build))
		.pipe(plugins.browserSync.stream());
}

export { scss };
