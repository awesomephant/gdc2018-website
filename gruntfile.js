module.exports = function (grunt) {
    grunt.initConfig({
        exec: {
            build: {
                command: 'bundle exec jekyll build',
            },
        },
        'ftp-deploy': {
            production: {
                auth: {
                    host: "192.186.222.66",
                    port: 21,
                    authPath: 'credentials.json',
                    authKey: 'production'
                },
                src: '_site/',
                dest: '/',
            },
            code: {
                auth: {
                    host: "192.186.222.66",
                    port: 21,
                    authPath: 'credentials.json',
                    authKey: 'production'
                },
                src: '_site/',
                exclusions: '_site/assets/images',
                dest: '/',
            },
        },
        responsive_images: {
            myTask: {
                options: {
                    newFilesOnly: false,
                    quality: 95,
                    rename: false,
                    sizes: [
                    {
                        name: 'large',
                        width: 700
                    }]
                },
                files: [{
                    expand: true,
                    src: ['assets/images/*.{jpg,gif,png,JPG,PNG,GIF}'],
                    cwd: './',
                    dest: '_tmp/'
                }]
            }
        },
        imagemin: {
            options: {
                optimizationLevel: 5
            },
            dynamic: {
                files: [{
                    expand: true,
                    cwd: '_tmp/',
                    src: ['**/*.{png,jpg,gif,PNG,JPG,GIF}'],
                    dest: '_site/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-ftp-deploy');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-exec');
    //    grunt.registerTask('deploy', ['run', 'ftp-deploy']);
    grunt.registerTask('minify', ['responsive_images', 'imagemin']);
    grunt.registerTask('deploy', ['exec', 'minify', 'ftp-deploy:production']);
    grunt.registerTask('deploy-code', ['exec', 'ftp-deploy:code']);

};