import GulpPug from "gulp-pug";
import webpHtml from "gulp-webp-html-nosvg";
import htmlMin from "gulp-htmlmin";

import { paths } from "../config/paths.js";
import { logger, plugins } from "../config/plugins.js";


function pug() {
    return app.gulp.src(paths.pages.src)
        .pipe(logger.handleError(" PUG "))
        .pipe(GulpPug({
            pretty: true
        }))
        .pipe(plugins.if(app.isBuild, webpHtml()))
        .pipe(plugins.if(app.isBuild, htmlMin({
                useShortDoctype: true,
                sortClassName: true,
                removeComments: true,
                collapseWhitespace: true,
            })))
        .pipe(app.gulp.dest(paths.pages.build))
        .pipe(plugins.browserSync.stream());
};

export { pug }