const
  config = require('./gulp/gulpconfig.json'),
  gulp = require('gulp'),
  fs = require('fs'),
  del = require('del'),
  browserSync = require('browser-sync').create(),
  hygienist = require('hygienist-middleware'),
  beepbeep = require('beepbeep'),
  plugins = require('gulp-load-plugins')(),
  emittyPug = require('emitty').setup(config.dev.templatesRoot, 'pug'),
  emittyScss = require('emitty').setup(config.dev.stylesRoot, 'scss');

/*
Server
*/
require('./gulp/tasks/server')(config, gulp, browserSync, hygienist);

/*
Templates
*/
require('./gulp/tasks/templates')(config, gulp, plugins, browserSync, emittyPug, beepbeep, fs);

/*
Styles
*/
require('./gulp/tasks/styles')(config, gulp, plugins, browserSync, emittyScss, beepbeep);

/*
SVG
*/
require('./gulp/tasks/svg')(config, gulp, plugins, del);

/*
Build
*/
require('./gulp/tasks/build')(config, gulp, plugins, del);

/*
Test Build
*/
require('./gulp/tasks/test')(config, gulp, browserSync);

gulp.task('default', ['server']);

gulp.watch(
  [config.dev.templatesGlob, config.path],
  ['templates:reload']
).on('all', function(event, filepath) {
  global.emittyChangedPug = filepath;
});

gulp.watch(
  config.dev.stylesGlob,
  ['styles']
).on('all', function(event, filepath) {
  global.emittyChangedScss = filepath;
});
