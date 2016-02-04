module.exports = function(grunt) {


  // Show elapsed time after tasks run to visualize performance
  require('time-grunt')(grunt);


  // Load all Grunt tasks that are listed in package.json automagically
  require('load-grunt-tasks')(grunt);


  grunt.initConfig({


    // Project configuration.
    pkg: grunt.file.readJSON('package.json'),


    // Shell commands for use in Grunt tasks
    shell: {
      jekyllBuild: {
        command: 'bundle exec jekyll build'
      },
      jekyllServe: {
        command: 'bundle exec jekyll serve'
      }
    },


    // Sass (libsass) config
    sass: {
      options: {
        sourceMap: true,
        relativeAssets: false,
        outputStyle: 'compressed',
        sassDir: 'assets/scss',
        cssDir: '_site/assets/css'
      },
      build: {
        files: [{
          expand: true,
          cwd: 'assets/scss/',
          src: ['*.scss'],
          dest: '_site/assets/css',
          ext: '.css'
        }]
      }
    },

    // SCSS lint
    scsslint: {
      allFiles: [
        'assets/scss/*.scss',
        'assets/scss/global/**/*.scss',
        'assets/scss/local/**/*.scss'
      ],
      options: {
        colorizeOutput: true,
        config: '.scss-lint.yml',
        exclude: [
          'assets/scss/global/utilities/_normalize.scss',
          'assets/scss/global/utilities/_utility-values.scss'
        ],
        reporterOutput: 'scss-lint-report.xml'
      }
    },

    // Copy content of fonts directory
    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'assets/fonts/',
          src: ['**'],
          dest: '_site/assets/fonts'
          }]
      }
    },


    // Publishing docs to GitHub Pages
    buildcontrol: {
      options: {
        dir: '_site',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      pages: {
        options: {
          remote: 'git@github.com:fac/origin.git',
          branch: 'gh-pages'
        }
      }
    },


    // Live reload and sync up browsing across browsers
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            '_site/*.*',
            '_site/**/*.*'
          ]
        },
        options: {
          port: 9001,
          proxy: "http://0.0.0.0:8001/origin/"
        }
      }
    },


    // Run tasks in parallel
    concurrent: {
      serve: [
        'watch',
        'shell:jekyllServe'
      ],
      options: {
        logConcurrentOutput: true
      }
    },


    // Watch for files to change and run tasks when they do
    watch: {
      scsslint: {
        files: [
          'assets/scss/*.scss',
          'assets/scss/global/**/*.scss',
          'assets/scss/local/**/*.scss'
        ],
        tasks: ['scsslint']
      },
      sass: {
        files: [
          'assets/scss/*.scss',
          'assets/scss/**/*.scss',
          'assets/scss/**/**/*.scss'
        ],
        tasks: ['sass']
      }
    }

  });


  // Task for build and serve documentation locally
  grunt.registerTask('serve', [
    'copy',
    'sass',
    'concurrent:serve'
  ]);

  // Task for running Browsersync
  grunt.registerTask('sync', [
    'browserSync'
  ]);

  // Task to only build documentation locally
  grunt.registerTask('build', [
    'copy',
    'sass',
    'shell:jekyllBuild'
  ]);

  // Register build and serve task as the default
  grunt.registerTask('default', 'serve');

  // Task for publishing documentation to GitHub Pages
  grunt.registerTask('publish', ['shell:jekyllBuild', 'buildcontrol:pages']);

};
