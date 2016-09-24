(function(){
        'use strict';

        angular
            .module('app')
            .controller('DashBoardController', DashBoardController)

        DashBoardController.$inject =['$q','$stateParams','dataservice']

        function DashBoardController($q,$stateParams, dataservice){
            var vm = this;
            var subscriberId = $stateParams.subscriberId;

            vm.familyStatList  =  [];
            vm.offeringStatByWeek =[];
            vm.offeringStatByMonth=[];

            activate();

            function activate() {

                var promises = [getFamilyStat(), getOfferingStatByWeekly(), getOfferingStatByMonthly()];

                return $q.all(promises);


            }

            function getFamilyStat(){

                return dataservice.getFamilyStatData(subscriberId).then(function(data) {

                    vm.familyStatList = data;

                    vm.familyTotal = data.familyTotal;
                    vm.familyMemberTotal = data.familyMemberTotal;
                    vm.moveOutFamilyTotal = data.moveOutFamilyTotal;

                    vm.familyStatSeries = ['Families', 'Family Members', 'Move Out'];
                    vm.familyStatLabels = [];
                    vm.familyStatData = [];
                    vm.familyCountList = [];
                    vm.familyMemberCountList = [];
                    vm.familyMoveOutCountList = [];

                    _.each(vm.familyStatList.details, function(item) {
                        vm.familyStatLabels.push(item.yearmonth);
                        vm.familyCountList.push(item.registeredFamilyCount);
                        vm.familyMemberCountList.push(item.registeredFamilyMemberCount);
                        vm.familyMoveOutCountList.push(item.MoveOutFamilyCount);
                    });

                    vm.familyStatData.push(vm.familyCountList);
                    vm.familyStatData.push(vm.familyMemberCountList);
                    vm.familyStatData.push(vm.familyMoveOutCountList);

                    vm.onClick = function (points, evt) {
                        console.log(points, evt);
                    };

                    return vm.familyStatList;
                });
            }

            function getOfferingStatByWeekly(){

                return dataservice.getOfferingStatByWeekly(subscriberId).then(function(data) {

                    vm.offeringStatByWeek = data;

                    vm.offeringStatWeekSeries = ['Offering', 'Thanks Offering', 'Contact Offering'];
                    vm.offeringStatWeekLabels = [];
                    vm.offeringStatWeekData = [];
                    vm.offeringAmount = [];
                    vm.thankOfferingAmount = [];
                    vm.contactOfferingAmount = [];

                    _.each(vm.offeringStatByWeek.offering, function(item) {
                        vm.offeringStatWeekLabels.push(item.week);
                        vm.offeringAmount.push(item.amount);
                    });

                    _.each(vm.offeringStatByWeek.thanksOffering, function(item) {
                        vm.thankOfferingAmount.push(item.amount);
                    });

                    _.each(vm.offeringStatByWeek.contractOffering, function(item) {
                        vm.contactOfferingAmount.push(item.amount);
                    });

                    vm.offeringStatWeekData.push(vm.offeringAmount);
                    vm.offeringStatWeekData.push(vm.thankOfferingAmount);
                    vm.offeringStatWeekData.push(vm.contactOfferingAmount);



                    return vm.offeringStatByWeek;
                });
            }

            function getOfferingStatByMonthly(){

                return dataservice.getOfferingStatByMonthly(subscriberId).then(function(data) {

                    vm.offeringStatByMonth = data;

                    vm.offeringStatMonthSeries = ['Offering', 'Thanks Offering', 'Contact Offering'];
                    vm.offeringStatMonthLabels = [];
                    vm.offeringStatMonthData = [];
                    vm.offeringAmount = [];
                    vm.thankOfferingAmount = [];
                    vm.contactOfferingAmount = [];

                    _.each(vm.offeringStatByMonth.offering, function(item) {
                        vm.offeringStatMonthLabels.push(item.yearmonth);
                        vm.offeringAmount.push(item.amount);
                    });

                    _.each(vm.offeringStatByMonth.thanksOffering, function(item) {
                        vm.thankOfferingAmount.push(item.amount);
                    });

                    _.each(vm.offeringStatByMonth.contractOffering, function(item) {
                        vm.contactOfferingAmount.push(item.amount);
                    });

                    vm.offeringStatMonthData.push(vm.offeringAmount);
                    vm.offeringStatMonthData.push(vm.thankOfferingAmount);
                    vm.offeringStatMonthData.push(vm.contactOfferingAmount);

                    return vm.offeringStatByMonth;
                });
            }

        }

    }

)();

