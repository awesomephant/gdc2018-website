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
        }
    });

    grunt.loadNpmTasks('grunt-ftp-deploy');
    grunt.loadNpmTasks('grunt-exec');
    //    grunt.registerTask('deploy', ['run', 'ftp-deploy']);
    grunt.registerTask('deploy', ['exec', 'ftp-deploy']);

};