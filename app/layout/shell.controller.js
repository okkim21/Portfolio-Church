(function(){
    'use strict';

    angular
        .module('app')
        .controller('ShellController', ShellController)

    ShellController.$inject =['$scope', '$state'];

    function ShellController($scope, $state){

        $scope.$on('outEvent', function(){
            $scope.leftclass  = "out" ;
        })
        $scope.$on('inEvent', function(){
            $scope.leftclass  = "in" ;
        })
        $state.go("dashboard");
    }
})();