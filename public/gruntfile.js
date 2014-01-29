module.exports = function( grunt ) {
  "use strict";

  // autoload modules from package.json
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  // Tasks configurations
  grunt.initConfig({

    compass: {
      default: {
        options: {
        outputStyle: "expanded",
        environment: "production",
        sassDir: "res/scss/",
        cssDir: "res/styles/",
        fontsDir: "res/fonts/",
        imagesDir: "res/images/"
        }
      }
    },

    watch: {
      sass: {
        options: {
          livereload: true
        },
        files: "res/scss/**/*.{scss,sass}",
        tasks: ["compass:default"]
      }
    }

  });

  // task registration
  grunt.registerTask('default', ['watch']);

};




