// karma.conf.js
module.exports = function(config) {
    config.set({
        reporters: ['progress', 'html'],
        htmlReporter: {
            outputFile: 'tests/jasmine.html',
            pageTitle: 'Jasmine Tests'
        },
        basePath: '.',
        files: ['src/main/js/**/*.js', 'src/test/js/*Spec.js'],
        frameworks: ['jasmine'],
        browsers: ['Chrome'],
        reporters: ['dots'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true
    });
};