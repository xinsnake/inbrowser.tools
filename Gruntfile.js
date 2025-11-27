module.exports = function (grunt) {
  grunt.initConfig({
    aws: grunt.file.readJSON("aws-keys.json"),
    aws_s3: {
      options: {
        accessKeyId: "<%= aws.AWSAccessKeyId %>",
        secretAccessKey: "<%= aws.AWSSecretKey %>",
        region: "us-east-1",
        uploadConcurrency: 5,
        downloadConcurrency: 5
      },
      production: {
        options: {
          bucket: "inbrowser.tools"
        },
        files: [{
          expand: true,
          cwd: "dist/",
          src: ["**"],
          dest: "/"
        }]
      }
    },
    pug: {
      compile: {
        options: {
          compileDebug: true,
          pretty: true
        },
        files: [{
          expand: true,
          cwd: "./src/",
          src: ["**/*.pug", "!**/_*.pug"],
          dest: "./dist/",
          ext: ".html"
        }]
      }
    },
    copy: {
      assets: {
        files: [{
          expand: true,
          cwd: "./src/",
          src: ["assets/**/*.*", "**/*.js", "favicon.ico", "robots.txt", "sitemap.xml"],
          dest: "dist/"
        }]
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

  grunt.loadNpmTasks("grunt-aws-s3")
  grunt.loadNpmTasks("grunt-contrib-clean")
  grunt.loadNpmTasks("grunt-contrib-copy")
  grunt.loadNpmTasks("grunt-contrib-pug")
  grunt.loadNpmTasks("grunt-contrib-watch")

  grunt.registerTask("default", ["clean", "pug", "copy:assets", "watch"])
  grunt.registerTask("deploy", ["clean", "pug", "copy:assets", "aws_s3"])
}
