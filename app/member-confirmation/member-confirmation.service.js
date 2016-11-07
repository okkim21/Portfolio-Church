(function () {
    'use strict';

    angular
        .module('app')
        .factory('memberConfirmationService', memberConfirmationService);

    memberConfirmationService.$inject =['$resource', '$q'];

    function memberConfirmationService($resource, $q){
        var basicUrl ='http://churchoffice-api.azurewebsites.net/api';
        var resource = $resource(basicUrl + '/families/:familyId/people/:personId/confirmation/:confirmationId', { familyId:'@familyId',personId: '@personId', confirmationId: '@confirmationId' }, { 'update': { method: 'put' } });
        return {
            update: function (memberConfirmation,memberParams) {
                var deferred = $q.defer();
                resource.update({familyId : memberParams.familyId, personId: memberParams.personId,confirmationId:memberParams.confirmationId },memberConfirmation,
                    function (response) {
                        deferred.resolve(response);
                    },
                    function (response) {
                        deferred.reject(response);
                    }
                );
                return deferred.promise;
            },
            save: function (memberConfirmation,memberParams) {
                var deferred = $q.defer();
                resource.save({familyId : memberParams.familyId, personId: memberParams.personId },memberConfirmation,
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