(function () {
    'use strict';

    angular
        .module('app')
        .factory('subregionCodeService', subregionCodeService);

    subregionCodeService.$inject =['$resource', '$q'];

    function subregionCodeService($resource, $q){
        var basicUrl ='http://churchoffice-api.azurewebsites.net/api';
        var resource = $resource(basicUrl+'/codes/:id', { id: '@id' }, { 'update': { method: 'put' } });
        return {
            getAll: function () {
                var deferred = $q.defer();
                resource.query({ name: 'subregion' },
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