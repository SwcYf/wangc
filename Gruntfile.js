module.exports = function(grunt) {
 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // 这里放插件的设置信息
  
  //   uglify: {
  //   build: {
  //     src: 'js/Gsnow.js',
  //     dest: 'js/Gsnow.min.js'
  //   }
  // },
  
   cssmin: {
            css: {
                src: 'css/jquery.fullPage.css',
                dest: 'css/Gsnow.fullPage.min.css'
            }
        },

     imagemin: {
            /* 压缩图片大小 */
            dist: {
                options: {
                    optimizationLevel: 3 //定义 PNG 图片优化水平
                },
                files: [
                       {
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,jpeg}'], // 优化 img 目录下所有 png/jpg/jpeg 图片
                    dest: 'img/' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
                    }
                    ]
                }
            },



  });
 
  // 载入要使用的插件
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-imagemin');
  // 注册任务
  grunt.registerTask('default', ['cssmin','imagemin']);
 
};