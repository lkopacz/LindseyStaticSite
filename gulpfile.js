//Requires gulp
var gulp = require('gulp');

// Requires the gulp-sass plugin
var sass = require('gulp-sass');

//Requires the gulp-watch plugin
var watch = require('gulp-watch');

gulp.task('sass', function(){
  return gulp.src('source/scss/**/*.scss')
	.pipe(sass()) // Using gulp-sass
	.pipe(gulp.dest('stylesheets'))
});

gulp.task('watch', function(){
  gulp.watch('source/scss/**/*.scss', ['sass']); 
  // Other watchers
})
