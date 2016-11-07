(function() {
    'use strict';

    var core = angular.module('app');

    core.config(toastrConfig);

    toastrConfig.$inject=['toastr'];

    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    var config = {
        appErrorPrefix: '[ChurchOffice-Modular Error] ', //Configure the exceptionHandler decorator
        appTitle: 'ChurchOffice',
        version: '1.0.0'
    };

    core.value('config', config);

    core.config(configure);

    configure.inject=['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider'];

    function configure($logProvider, routerHelperProvider, exceptionHandlerProvider){

        if($logProvider.debugEnabled()){
            $logProvider.debugEnabled(true);
        }

        exceptionHandlerProvider.configure(config.appErrorPrefix);
        routerHelperProvider.configure({docTitle: config.appTitle + ': '});

    }

})();

