var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var concat = require('gulp-concat-css');

gulp.task('pug', function(){
	  gulp.src('src/pug/*.pug')
	      .pipe(pug())
		  .pipe(gulp.dest('src/html/'));
})

gulp.task('sass', function(){
	gulp.src('src/sass/*.scss')
	    .pipe(sass())
	    .pipe(gulp.dest('src/css'));
})

gulp.task('concat', function() {
	return gulp.src('src/css/*.css')
		   .pipe(concat("bundle.css"))
		   .pipe(gulp.dest('src/app/'));	
})

gulp.task('watch', function () {
	gulp.watch('src/sass/*.scss', ['sass']);
	gulp.watch('src/pug/*.pug', ['pug']);
    gulp.watch('src/css/*.css', ['concat']);
})