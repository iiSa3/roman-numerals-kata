module.exports = function(grunt) {

    grunt.initConfig({
        jasmine: {
            coverage: {
                src: ['src/main/js/*.js'],
                options: {
                    specs: ['src/test/js/*.js'],
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        coverage: 'bin/coverage/coverage.json',
                        report: 'bin/coverage',
                        thresholds: {
                            lines: 75,
                            statements: 75,
                            branches: 75,
                            functions: 90
                        }
                    }
                }
            }
        }
    }

    grunt.loadNpmTasks('grunt-contrib-jasmine');
};