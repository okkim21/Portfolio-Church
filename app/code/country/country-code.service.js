(function () {
    'use strict';

    angular
        .module('app')
        .factory('countryCodeService', countryCodeService);

    countryCodeService.$inject =['$resource', '$q'];

    function countryCodeService($resource, $q){
        var resource = $resource('data/country.json');
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