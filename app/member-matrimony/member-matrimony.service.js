(function () {
    'use strict';

    angular
        .module('app')
        .factory('memberMatrimonyService', memberMatrimonyService);

    memberMatrimonyService.$inject =['$resource', '$q'];

    function memberMatrimonyService($resource, $q){
        var basicUrl ='http://churchoffice-api.azurewebsites.net/api';
        var resource = $resource(basicUrl + '/families/:familyId/people/:personId/matrimony/:matrimonyId', { familyId:'@familyId',personId: '@personId', matrimonyId: '@matrimonyId' }, { 'update': { method: 'put' } });
        return {
            update: function (memberMatrimony,memberParams) {
                var deferred = $q.defer();
                resource.update({familyId : memberParams.familyId, personId: memberParams.personId,matrimonyId: memberParams.matrimonyId },memberMatrimony,
                    function (response) {
                        deferred.resolve(response);
                    },
                    function (response) {
                        deferred.reject(response);
                    }
                );
                return deferred.promise;
            },
            save: function (memberMatrimony,memberParams) {
                var deferred = $q.defer();
                resource.save({familyId : memberParams.familyId, personId: memberParams.personId },memberMatrimony,
                    function (response) {
                        deferred.resolve(response);
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