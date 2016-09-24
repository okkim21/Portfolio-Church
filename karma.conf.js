// Karma configuration
// Generated on Tue Feb 09 2016 21:19:56 GMT-0800 (PST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'lib/angular/angular.js',
        'lib/angular-ui-router/release/angular-ui-router.js',
        'lib/angular-bootstrap/ui-bootstrap-tpls.js',
        'lib/angular-mocks/angular-mocks.js',
        'lib/toastr/toastr.js',
        'lib/underscore/underscore.js',
        'lib/Chart.js/Chart.js',
        'lib/angular-chart.js/dist/angular-chart.js',
        'lib/angular-animate/angular-animate.js',
        'lib/angular-messages/angular-messages.js',
        'lib/angular-resource/angular-resource.min.js',
        'app/*.js',
        'app/**/*.js',
        'app/**/*.service.js',
        'app/**/**/*.service.js',
        'app/**/**/*.provider.js',
        'app/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false

  })
}
