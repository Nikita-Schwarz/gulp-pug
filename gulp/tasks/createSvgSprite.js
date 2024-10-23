import svgSprite from 'gulp-svg-sprite';

import { paths } from '../config/paths.js';
import { logger, plugins } from '../config/plugins.js';

const config = {
	mode: {
		symbol: {
			sprite: '../sprite.svg',

			/* Создавать страницу с перечнем иконок
          example: true,*/
		},
	},
};

function createSvgSprite() {
	return app.gulp
		.src(paths.sprite.src)
		.pipe(logger.handleError(' SVG SPRITE '))
		.pipe(svgSprite(config))
		.pipe(app.gulp.dest(paths.sprite.build))
		.pipe(plugins.browserSync.stream());
}

export { createSvgSprite };
