module.exports = function(config, gulp, plugins, browserSync, emitty, beepbeep, fs) {

  gulp.task('templates:compile', function() {
    return gulp.src(config.dev.templatesGlob)

      .pipe(emitty.stream(global.emittyChangedPug))

      .pipe(plugins.data(function(file) {
        return JSON.parse(fs.readFileSync(config.dev.jsonGlobal))
      }))

      .pipe(plugins.pug({
        pretty: true
      }))

      .on('error', function (error) {
        beepbeep();
        console.log(error.message);
        this.emit('end');
      })

      .pipe(plugins.filter(config.dev.pagesFilter))

      .pipe(plugins.faker())

      .pipe(plugins.rename(function (path) {
        path.extname = config.dev.pagesFormat;
      }))

      .pipe(gulp.dest(config.dev.pagesRoot));
  });

  // Read paths to assets.
  gulp.task('templates:resources', function() {
    var readFile = fs.readFileSync(config.path, 'utf8');
    config = JSON.parse(readFile);
  });

  gulp.task('templates', ['templates:compile', 'templates:resources'], function() {
    return gulp.src(config.dev.pagesGlob, {base: '/' + config.dev.root})

      .pipe(plugins.cached('pages'))

      .pipe(plugins.rename(function (path) {
        path.dirname = path.dirname.replace(config.dev.pagesPartial, '.');
      }))

      .pipe(plugins.inject(gulp.src(
        config.assets.dev, {read: false}), {
          relative: true,
          name: 'site'
        }
      ))
      .pipe(gulp.dest('/' + config.dev.root));
  });

  gulp.task('templates:reload', ['templates'], function(done) {
    browserSync.reload();

    done();
  });

}
