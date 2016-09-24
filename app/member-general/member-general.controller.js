(function(){
        'use strict';

        angular
            .module('app')
            .controller('MemberGeneralController', MemberGeneralController)

        MemberGeneralController.$inject =['$q','$uibModalInstance','property','relationCodeService','statusCodeService']

        function MemberGeneralController($q, $uibModalInstance, property,relationCodeService,statusCodeService){
            var vm = this;

            vm.memberGeneral =[];
            vm.relationList =[];
            vm.statusList=[];
            vm.open = openDatePicker;
            vm.open2 = openDatePicker2;
            vm.opened = false;
            vm.opened2 = false;
            vm.save = save;
            vm.cancel = cancel;

            activate();

            function activate() {
                if(property.createOption) {
                    var promises = [getRelation(), getStatus()];
                }
                else
                {
                    var promises = [getMemberGeneral(), getRelation(), getStatus()];
                }

                return $q.all(promises);
            }
            function getMemberGeneral() {
                vm.memberGeneral = property.itemToEdit;
                return vm.memberGeneral;

            }

            function getRelation(){
                return relationCodeService.getAll()
                    .then(function(result){
                        return vm.relationList = result;
                    }
                );

            }

            function getStatus(){
                return statusCodeService.getAll()
                    .then(function(result){
                        return vm.statusList = result;
                    }
                );
            }

            function openDatePicker($event) {
                $event.preventDefault();
                $event.stopPropagation();
                vm.opened = true;
            }

            function openDatePicker2($event) {
                $event.preventDefault();
                $event.stopPropagation();
                vm.opened2 = true;
            }

            function cancel(){
                $uibModalInstance.dismiss();
            }

            function save(item){
                $uibModalInstance.close(vm.memberGeneral);
            }

        }
    }

)();
