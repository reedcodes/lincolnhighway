'use strict';

const cleanCSS = require( 'gulp-clean-css' ),
      gulp = require( 'gulp' ),
      sass = require( 'gulp-sass' )( require( 'sass' ) ),
      sourcemaps = require( 'gulp-sourcemaps' );

// Define CSS source and distribution directories.
const cssSource = './source/_sass/**/*.scss';
const cssBuild = './site/dist/css';

// Task to compile CSS files.
gulp.task( 'sass', function() {
  return gulp.src( cssSource )
    .pipe( sourcemaps.init() )
    .pipe( sass() )
    .pipe( cleanCSS( { level: 2 } ) )
    .pipe( sourcemaps.write() )
    .pipe( gulp.dest( cssBuild ) );
});

// Gulp tasks.
gulp.task( 'default', gulp.series( 'sass' ) );
