module.exports = function(config, gulp, plugins, browserSync, emitty, beepbeep) {

  gulp.task('styles', function () {
    return gulp.src(config.dev.stylesBase)

      .pipe(emitty.stream(global.emittyChangedScss))

      .pipe(plugins.sassGlob())

      .pipe(plugins.sass({
        includePaths: ['./node_modules/breakpoint-sass/stylesheets/']
      })

      .on('error', function (error) {
        beepbeep();
        plugins.sass.logError.bind(this)(error);
      }))

      .pipe(plugins.autoprefixer())

      .pipe(gulp.dest(config.dev.tempRoot))
      
      .pipe(browserSync.stream());
  });

}
