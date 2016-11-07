(function () {
    'use strict';

    angular
        .module('app')
        .factory('stateCodeService', stateCodeService);

    stateCodeService.$inject =['$resource', '$q'];

    function stateCodeService($resource, $q){
        var resource = $resource('data/state.json');
        return {
            getAll: function () {
                var deferred = $q.defer();
                resource.query(
                    function (results) {
                        deferred.resolve(results);
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