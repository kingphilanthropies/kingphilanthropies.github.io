module.exports = function(grunt) {

function loadConfig(path) {
  var glob = require('glob'),
      object = {},
      key;
 
  glob.sync('*', {cwd: path}).forEach(function(option) {
    key = option.replace(/\.js$/,'');
    object[key] = require(path + option);
  });
 
  return object;
}

var config = {
  pkg: grunt.file.readJSON('package.json'),
  env: process.env
};

grunt.util._.extend(config, loadConfig('./_grunt/'));

grunt.initConfig(config);

// load plugins
require('load-grunt-tasks')(grunt);

// Default task(s).
//grunt.registerTask('default', ['newer:imagemin:dynamic',  'concat', 'sass', 'browserSync', 'watch']);

// Register the grunt serve task
grunt.registerTask('serve', [
    'concurrent:serve'
]);

// Register the grunt build task
grunt.registerTask('build', [
    'shell:jekyllBuild',
    'sass',
    'newer:imagemin:dynamic',
    'cssmin'
]);

grunt.registerTask('svgsprite', [
    'svgstore'
]);

grunt.registerTask('images', [
    'imagemin'
]);

// Register build as the default task fallback
grunt.registerTask('default', 'build');


};