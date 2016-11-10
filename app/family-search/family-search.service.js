(function () {
    'use strict';

    angular
        .module('app')
        .factory('familySearchService', familySearchService);

    familySearchService.$inject =['$resource', '$q'];

    function familySearchService($resource, $q){
        var resource = $resource('data/familySearch.json');
        return {
            get: function () {
                var deferred = $q.defer();
                resource.query(
                    function (result) {
                        deferred.resolve(result);
                    },
                    function (response) {
                        deferred.reject(response);
                    }
                );
                return deferred.promise;
            }
        }
        //var basicUrl ='http://churchoffice-api.azurewebsites.net/api';
        //var resource = $resource(basicUrl + '/search');
        //return {
        //    get: function (name) {
        //        var deferred = $q.defer();
        //        resource.query({name: name},
        //            function (result) {
        //                deferred.resolve(result);
        //            },
        //            function (response) {
        //                deferred.reject(response);
        //            }
        //        );
        //        return deferred.promise;
        //    }
        //}
    }
})();