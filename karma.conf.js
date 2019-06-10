// karma.conf.js
module.exports = function(config) {
    config.set({
        basePath: 'src',
        files: ['main/js/**/*.js', 'test/js/*Spec.js'],
        frameworks: ['jasmine'],
        browsers: ['Chrome'],
        reporters: ['dots'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        // browsers: ['PhantomJS'],
        // singleRun: true
    });
};