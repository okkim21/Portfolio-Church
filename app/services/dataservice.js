(function(){
    'use strict';

    angular
        .module('app')
        .factory('dataservice', dataservice);

    dataservice.$inject =['$http','exception'];

    function dataservice($http,exception){

        var service ={
            getFamilyStatData :getFamilyStatData,
            getOfferingStatByWeekly : getOfferingStatByWeekly,
            getOfferingStatByMonthly: getOfferingStatByMonthly,
            getFamilySearch : getFamilySearch,
            getRelation:getRelation,
            getStatus: getStatus,
            saveMemberGeneral: saveMemberGeneral,
            saveMemberBaptism: saveMemberBaptism,
            saveMemberConfirmation:saveMemberConfirmation,
            saveMemberMarital:saveMemberMarital
        };

        var baseUrl = '';

        return service;

        function getFamilyStatData(subscriberId){
          return httpGet('data/dashboard-familyStat.json')
        }

        function getOfferingStatByWeekly(subscriberId){
            return httpGet('data/dashboard-offeringStatByWeek.json')
        }

        function getOfferingStatByMonthly(subscriberId){
            return httpGet('data/dashboard-offeringStatByMonth.json')
        }

        function getFamilySearch(searchString){
            var params = {name:searchString};
            return httpGetwithParam('http://churchoffice-api.azurewebsites.net/api/search/',params);
        }

        function getRelation(){
            var params = {name:'relation'};
            return httpGetwithParam('http://churchoffice-api.azurewebsites.net/api/codes/', params);
        }

        function getStatus(){
            var params = {name:'status'};
            return httpGetwithParam('http://churchoffice-api.azurewebsites.net/api/codes/', params);
        }

        function saveMemberGeneral(items){
            return saveItem('http://churchoffice-api.azurewebsites.net/api/people/' + items.personId + 'general', items);
        }

        function saveMemberBaptism(items){
            return saveItem('', items);
        }

        function saveMemberConfirmation(items){
            return saveItem('', items);
        }

        function saveMemberMarital(items){
            return saveItem('', items);
        }

        /** Private Methods **/
        function httpDelete(url){
            return httpExecute(url, 'DELETE');
        }

        function httpExecute(requestUrl, method, data){
            return $http({
                url: baseUrl + requestUrl,
                method: method,
                data: data})
                .then(function(response){

                    console.log('**response from EXECUTE', response);
                    return response.data;
                })
                .catch(exception.catcher('COU Failed for getting data'));
        }

        function httpExecutewithParam(requestUrl, method, params, data){
            return $http({
                url: baseUrl + requestUrl,
                method: method,
                params:params,
                data: data})
                .then(function(response){
                    console.log('**response from EXECUTE', response);
                    return response.data;
                })
                .catch(exception.catcher('COU Failed for getting data'));
        }

        function httpGet(url){
            return httpExecute(url, 'GET');
        }

        function httpGetwithParam(url, params){
            return httpExecutewithParam(url, 'GET', params);
        }

        function httpPatch(url, data){
            return httpExecute(url, 'PATCH', data);
        }

        function httpPut(url, data){
            return httpExecute(url, 'PUT', data);
        }

        function httpPost(url, data){
            return httpExecute(url, 'POST','', data);
        }

        function saveItem(url, item){
            if (item.id) {
                return httpPut(url+ '/' + item.id , item);
            } else {
                return httpPost(url, item);
            }
        }

        function saveItem(url, item){
            if (item.personId) {
                return httpPut(url+ '/' + item.personId , item);
            } else {
                return httpPost(url, item);
            }
        }
    }
})();