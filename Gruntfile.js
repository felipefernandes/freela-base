module.exports = function(grunt) {
  grunt.initConfig({
     // configurações das tasks
     less: {
       'assets/css/main.css': 'builds/css-less/main.less'
     },
     ngAnnotate: {
          options: {
              singleQuotes: true
          },
          app: {
              files: {
                  'assets/main.js': ['builds/js/main.js']
              }
          }
      },
      uglify: {
          js: { //target
              src: ['builds/js/main.js'],
              dest: 'assets/js/main.js'
          }
      },
      cssmin: {
        options: {
          shorthandCompacting: false,
          roundingPrecision: -1
        },
        target: {
          files: {
            'assets/css/main.css': 'assets/css/main.css'
          }
        }
      }


  });

  // carrega plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-ng-annotate');

  grunt.registerTask('default', ['less', 'cssmin', 'ngAnnotate', 'uglify']);
};
