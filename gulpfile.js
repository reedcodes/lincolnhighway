'use strict';

const gulp = require( 'gulp' ),
      sass = require( 'gulp-dart-sass' );

const cssSource = './source/assets/sass/**/*.scss';
const cssIncludePaths = [
  './node_modules/@fortawesome/fontawesome-free/scss'
];
const cssBuild = './site/assets/css';

gulp.task( 'sass', function() {
  return gulp.src( cssSource )
    .pipe( sass( {
      outputStyle: 'compressed',
      includePaths: cssIncludePaths
    } ) )
    .pipe( gulp.dest( cssBuild ) );
});

// Gulp tasks.
gulp.task( 'default', gulp.series( 'sass' ) );
