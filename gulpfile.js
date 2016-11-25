var gulp = require('gulp'); 
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');

gulp.task('default',function(){
	console.log("Hooray - you created a Gulp task.");
});

gulp.task('html',function(){
	console.log("Imagine something useful being done to your HTML here.");
});

gulp.task('styles',function(){
	console.log("Styles ran");
	return gulp.src('./app/assets/css/styles.css')
		.pipe(postcss([autoprefixer,nested,cssvars]))
		.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch',function(){
	watch('./app/index.html',function(){
		gulp.start('html');
	});
	watch('./app/assets/css/**/*.css',function(){
		gulp.start('styles');
	});
});