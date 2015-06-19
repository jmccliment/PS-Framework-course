var gulp = require('gulp')
  , less = require('gulp-less')
  , path = require('path');
  
gulp.task('styles', function styles() {
  return gulp.src(['./**/*.less', '!./bower_components/**', '!./node_modules/**'])
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function watch(){
  gulp.watch('./**/*.less', ['styles']);
});