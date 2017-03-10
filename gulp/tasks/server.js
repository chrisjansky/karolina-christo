module.exports = function(config, gulp, browserSync, hygienist) {

  gulp.task('server', function() {
    return browserSync.init({
      server: {
        baseDir: config.dev.root,
        routes: {
          '/node_modules': './node_modules'
        },
        middleware: hygienist(config.dev.root)
      },
      notify: false
    });
  });

}
