(function () {
    'use strict';

    angular
        .module('app')
        .factory('familyRegisterService', familyRegisterService);

    familyRegisterService.$inject =['$resource', '$q'];

    function familyRegisterService($resource, $q){
        var basicUrl ='http://churchoffice-api.azurewebsites.net/api';
        var resource = $resource(basicUrl + '/families/:id', { id: '@id' }, { 'update': { method: 'put' } });
        return {
            get: function (id) {
                var deferred = $q.defer();
                resource.get({id: id},
                    function (result) {
                        deferred.resolve(result);
                    },
                    function (response) {
                        deferred.reject(response);
                    }
                );
                return deferred.promise;
            },
            update: function (family, id) {
                var deferred = $q.defer();
                resource.update({id:id},family,
                    function (response) {
                        deferred.resolve(response);
                    },
                    function (response) {
                        deferred.reject(response);
                    }
                );
                return deferred.promise;
            },
            save: function(family) {
                var deferred = $q.defer();
                resource.save(family,
                    function(response) {
                        deferred.resolve(response);
                    },
                    function(response) {
                        deferred.reject(response);
                    }
                );
                return deferred.promise;
            }

        }

    }
})();