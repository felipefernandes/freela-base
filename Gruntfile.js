module.exports = function(grunt) {
  grunt.initConfig({
     // configurações das tasks
     less: {
       'assets/css/main.css': 'builds/css-less/main.less'
     }, //less

     ngAnnotate: {
          options: {
              singleQuotes: true
          },
          app: {
              files: {
                  'assets/js/main.js': ['builds/js/main.js']
              }
          }
      }, //ngAnnotate

      uglify: {
          js: { //target
              src: ['builds/js/main.js'],
              dest: 'assets/js/main.js'
          }
      }, //uglify

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
      }, //cssmin

      concat: {
        dist: {
            src: ["builds/js/**/*",
                  "builds/angular/angular.min.js",
                  "builds/angular-auto-validate/dist/jcs-autovalidate.min.js",
                  "builds/bootstrap/dist/js/bootstrap.min.js",
                  "builds/jquery/dist/jquery.min.js",
                  "builds/less/dist/less.min.js"]
          , dest: "assets/js/main.js"
        }
      },

      watch : {
        dist : {
          files : [
            'builds/js/**/*',
            'builds/css-less/**/*'
          ],

          tasks : [ 'concat', 'less', 'cssmin', 'ngAnnotate', 'uglify' ]
        }
      } // watch


  });

  // carrega plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-ng-annotate');
  grunt.loadNpmTasks( 'grunt-contrib-watch' );

  // Tarefa para o comando default
  grunt.registerTask('default', ['concat', 'less', 'cssmin', 'ngAnnotate', 'uglify']);

  // Tarefa para Watch
  grunt.registerTask( 'w', [ 'watch' ] );
};
