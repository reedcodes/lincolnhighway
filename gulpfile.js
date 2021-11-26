'use strict';

const gulp = require( 'gulp' ),
      sass = require( 'gulp-sass' )( require( 'sass' ) );

// Define CSS source and distribution directories.
const cssSource = './source/_sass/**/*.scss';
const cssBuild = './site/dist/css';

// Define CSS source paths from other locations, e.g. node modules.
const cssIncludePaths = [
  './node_modules/@fortawesome/fontawesome-free/scss',
  './node_modules/include-media/dist'
];

// Task to compile CSS files.
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
