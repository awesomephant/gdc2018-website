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
            }
        },
        responsive_images: {
            myTask: {
                options: {
                    rename: false,
                    sizes: [
                    {
                        name: 'large',
                        width: 1000
                    }]
                },
                files: [{
                    expand: true,
                    src: ['assets/images/*.{jpg,gif,png}'],
                    cwd: './',
                    dest: '_tmp/'
                }]
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: '_tmp/',
                    src: ['**/*.{png,jpg,gif}'],
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
    grunt.registerTask('deploy', ['exec', 'minify', 'ftp-deploy']);

};