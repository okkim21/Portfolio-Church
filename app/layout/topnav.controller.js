(function(){
    'use strict';

    angular
        .module('app')
        .controller('TopNavController', TopNavController)

    TopNavController.$inject = ['$scope','$rootScope']

    function TopNavController($scope, $rootScope){
        $scope.searchString;

        $scope.changeClass  = function (){
            var sideMenuLeft = angular.element(document.querySelector('aside')).prop('offsetLeft');
            if ( sideMenuLeft === 0) {
               $rootScope.$broadcast("outEvent");
            }
            else {
                $rootScope.$broadcast("inEvent");
            }
        }

    }
})();