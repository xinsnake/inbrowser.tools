module.exports = function(grunt) {
  grunt.initConfig({
    pug: {
      compile: {
        options: {
          compileDebug: true,
          pretty: true
        },
        files: [
          {
            expand: true,
            cwd: "./src/",
            src: ["**/*.pug", "!**/_*.pug"],
            dest: "./dist/",
            ext: ".html"
          }
        ]
      }
    },
    copy: {
      assets: {
        files: [
          {
            expand: true,
            cwd: "./src/",
            src: ["assets/**/*.*", "**/*.js"],
            dest: "dist/"
          }
        ]
      }
    },
    clean: ["./dist"],
    watch: {
      scripts: {
        files: ["./src/**/*.*"],
        tasks: ["pug", "copy"]
      }
    }
  })

  grunt.loadNpmTasks("grunt-contrib-pug")
  grunt.loadNpmTasks("grunt-contrib-copy")
  grunt.loadNpmTasks("grunt-contrib-watch")
  grunt.loadNpmTasks("grunt-contrib-clean")

  grunt.registerTask("default", ["clean", "pug", "copy", "watch"])
}
