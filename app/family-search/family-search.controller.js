(function(){
        'use strict';

        angular
            .module('app')
            .controller('FamilySearchController', FamilySearchController)

        FamilySearchController.$inject =['$stateParams','exception','familySearchService']

        function FamilySearchController($stateParams,exception, familySearchService){
            var vm = this;
            var searchString ="Kim Ok";
            //var searchString = $stateParams.searchString;

            vm.familySearchList  =  [];

            activate();

            function activate() {
               return getFamilySearch();
            }

            function getFamilySearch(){
                return familySearchService.get(searchString)
                    .then(function (result) {
                        return vm.familySearchList = result;
                    },
                    exception.catcher('COU Failed for getting data')
                );

            }
        }

    }

)();

