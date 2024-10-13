import webpack from 'webpack-stream';
import { webpackConfig } from '../../webpack.config.js';

import { logger, plugins } from '../config/plugins.js';
import { paths } from '../config/paths.js';

function js() {
    return app.gulp.src(paths.js.src, { sourcemaps: app.isDev })
        .pipe(logger.handleError(" JS "))
        .pipe(webpack({ config: webpackConfig(app.isDev) }))
        .pipe(app.gulp.dest(paths.js.build))
        .pipe(plugins.browserSync.stream());
};

export { js };