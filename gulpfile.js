//Requires gulp
var gulp = require('gulp');

// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('source/scss/**/*.scss')
	.pipe(sass()) // Using gulp-sass
	.pipe(gulp.dest('stylesheets'))
});
