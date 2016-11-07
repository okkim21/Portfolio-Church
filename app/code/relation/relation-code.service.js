(function () {
    'use strict';

    angular
        .module('app')
        .factory('relationCodeService', relationCodeService);

    relationCodeService.$inject =['$resource', '$q'];

    function relationCodeService($resource, $q){
        var basicUrl ='http://churchoffice-api.azurewebsites.net/api';
        var resource = $resource(basicUrl+'/codes/:id', { id: '@id' }, { 'update': { method: 'put' } });
        return {
            getAll: function () {
                var deferred = $q.defer();
                resource.query({ name: 'relation' },
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
    };
})();