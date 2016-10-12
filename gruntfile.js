
/*
  This configuration file will compile javascript files in the 'src' directory.
    1. Perform linting on files
    2. Copy files to 'build' folder and minify
 */

// Grunt mandatory wrapper function
module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    jshint: {
      all: ['src/**/*.js']
    },
    uglify: {
      files: {
        expand: true,
        cwd: 'src/',
        src: ['**/*.js'],
        dest: 'build/'
      }
    }
  });

  // Load all dev dependency modules specified in package.json file but ignore the main grunt module
  // (Grunt can't load itself!)
  Object.keys(require('./package.json').devDependencies).forEach((dependencyName) => {
    if(dependencyName.substring(0,6) == "grunt-") {
      grunt.loadNpmTasks(dependencyName);
    }
  });

  // Register default tasks referenced in project configuration
  grunt.registerTask('default', ['jshint', 'uglify']);
}