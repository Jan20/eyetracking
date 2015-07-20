/*global module:false*/
module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        // Task configuration.
        bower_concat: {
            all: {
                dest: 'app/bower_compressed/bower_compressed.js',
                cssDest: 'app/bower_compressed/bower_compressed.css',
                mainFiles: {
                    'bootstrap': ['dist/js/bootstrap.min.js', 'dist/css/bootstrap.css' ],
                    'font-awesome': ['fonts/fontawesome-webfont.woff']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-bower-concat');
    // Default task.
    grunt.registerTask('default', ['bower_concat']);
};