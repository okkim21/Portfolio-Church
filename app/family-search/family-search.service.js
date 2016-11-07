(function () {
    'use strict';

    angular
        .module('app')
        .factory('familySearchService', familySearchService);

    familySearchService.$inject =['$resource', '$q'];

    function familySearchService($resource, $q){
        var basicUrl ='http://churchoffice-api.azurewebsites.net/api';
        var resource = $resource(basicUrl + '/search');
        return {
            get: function (name) {
                var deferred = $q.defer();
                resource.query({name: name},
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
    }
})();