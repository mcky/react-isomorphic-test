var gulp = require('gulp')
	, rename = require('gulp-rename')
	, browserify = require('gulp-browserify')
	, uglify = require('gulp-uglifyjs')
	, react = require('gulp-react')

gulp.task('react', function() {
	gulp.src('./app/components/**/*.jsx')
		.pipe(react())
		.pipe(gulp.dest('./app/components/'))
});

gulp.task('scripts', function() {
	gulp.src('./app/client.js')
		.pipe(browserify())
		.pipe(rename('bundle.js'))
		// .pipe(uglify())
		.pipe(gulp.dest('./app/public/js/'))
});

gulp.task('default', function () {
	gulp.start(['scripts', 'react'])
	gulp.watch('./app/components/**/*.jsx', ['react', 'scripts'])
	gulp.watch('./app/{app,client}.js', ['scripts'])
})
