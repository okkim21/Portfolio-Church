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


})();

