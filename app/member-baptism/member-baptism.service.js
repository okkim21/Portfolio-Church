(function () {
    'use strict';

    angular
        .module('app')
        .factory('memberBaptismService', memberBaptismService);

    memberBaptismService.$inject =['$resource', '$q'];

    function memberBaptismService($resource, $q){
        var basicUrl ='http://churchoffice-api.azurewebsites.net/api';
        var resource = $resource(basicUrl + '/families/:familyId/people/:personId/baptism/:baptismId', {familyId:'@familyId', personId: '@personId', baptismId:'@baptismId' }, { 'update': { method: 'put' } });
        return {
            update: function (memberBaptism, memberParams) {
                var deferred = $q.defer();
                resource.update({familyId : memberParams.familyId, personId: memberParams.personId,baptismId:memberParams.baptismId },memberBaptism,
                    function (response) {
                        deferred.resolve(response);
                    },
                    function (response) {
                        deferred.reject(response);
                    }
                );
                return deferred.promise;
            },
            save:function (memberBaptism, memberParams) {
                var deferred = $q.defer();
                resource.save({familyId : memberParams.familyId, personId: memberParams.personId }, memberBaptism,
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
