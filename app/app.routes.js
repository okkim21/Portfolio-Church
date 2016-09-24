

(function(){
    'use strict';

    angular
        .module('app')
        .config(getRoutes);

    getRoutes.$inject =['$stateProvider','$urlRouterProvider'];

    function getRoutes($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/dashboard');

        $stateProvider
            .state('home',{
                url:'/',
                templateUrl:'app/dashboard/dashboard.html',
                controller:'DashBoardController as dashBoardCtrl'
            })
            .state('dashboard',{
                url:'/dashboard',
                templateUrl:'app/dashboard/dashboard.html',
                controller:'DashBoardController as dashBoardCtrl'
            })
            .state('familysearch',{
                url:'/family-search/:searchString',
                templateUrl:'app/family-search/family-search.html',
                controller:'FamilySearchController as familySearchCtrl'
            })
            .state('familyregister',{
                url:'/family-register/:id',
                templateUrl:'app/family-register/family-register.html',
                controller:'FamilyRegisterController as familyRegsiterCtrl'
            })
            .state('churchsetting',{
                url:'/church-setting',
                templateUrl:'app/church-setting/church-setting.html'
            })

    }

})();
