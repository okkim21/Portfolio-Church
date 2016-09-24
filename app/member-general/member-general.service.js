(function () {
    'use strict';

    angular
        .module('app')
        .factory('memberGeneralService', memberGeneralService);

    memberGeneralService.$inject =['$resource', '$q'];

    function memberGeneralService($resource, $q){
        var basicUrl ='http://churchoffice-api.azurewebsites.net/api';
        var resource = $resource(basicUrl + '/families/:familyId/people/:personId', { familyId:'@familyId',personId: '@personId' }, { 'update': { method: 'put' } });
        return {
            update: function (memberGeneral, memberParams) {
                var deferred = $q.defer();
                resource.update({familyId : memberParams.familyId, personId: memberParams.personId },memberGeneral,
                    function (response) {
                        deferred.resolve(response);
                    },
                    function (response) {
                        deferred.reject(response);
                    }
                );
                return deferred.promise;
            },
            save:function (memberGeneral, memberParams) {
                var deferred = $q.defer();
                resource.save({familyId : memberParams.familyId }, memberGeneral,
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