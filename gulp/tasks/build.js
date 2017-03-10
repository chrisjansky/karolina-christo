module.exports = function(config, gulp, plugins, del) {

  // Delete the previous build.
  gulp.task('build:wipe', function() {
    return del(config.dist.root);
  });

  // Move other assets to production folder.
  gulp.task('build:move', ['build:wipe'], function() {
    return gulp.src(config.move, {base: config.dev.root})
      .pipe(gulp.dest(config.dist.root));
  });

  // Clean CSS and JS.
  gulp.task('build:compile', ['build:move'], function() {
    return gulp.src(config.dev.root + 'index.html')
      .pipe(plugins.usemin(
        {
          js: [plugins.uglify()],
          css: [
            plugins.cleanCss({
              keepSpecialComments: 0
          })]
        }
      ))
      .pipe(gulp.dest(config.dist.root));
  });

  // Inject production assets into all pages.
  gulp.task('build:inject', ['build:compile'], function() {
    return gulp.src(config.dist.root + '**/*.html')
      .pipe(plugins.inject(gulp.src(
          config.assets.dist, {read: false}), {
            relative: true,
            name: 'site'
          }
        ))
      .pipe(gulp.dest(config.dist.root));
  });

  // Minify images.
  gulp.task('build:images', ['build:wipe'], function() {
    return gulp.src([config.dev.imagesGlob, config.dev.imagesIgnore], {base: config.dev.root})
      .pipe(plugins.imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}]
      }))
      .pipe(gulp.dest(config.dist.root));
  });

  // Wipe first. Move, produce. Images in parallel with it.
  gulp.task('build', ['build:inject', 'build:images']);
}

