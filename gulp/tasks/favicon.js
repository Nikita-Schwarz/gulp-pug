import { paths } from "../config/paths.js";
import { logger, plugins } from "../config/plugins.js";

function favicon() {
    return app.gulp.src(paths.favicon.src, { encoding: false })
    .pipe(logger.handleError(" FAVICON "))
    .pipe(app.gulp.dest(paths.favicon.build))
    .pipe(plugins.browserSync.stream());
}

export { favicon }