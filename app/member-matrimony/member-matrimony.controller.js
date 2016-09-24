(function(){
        'use strict';

        angular
            .module('app')
            .controller('MemberMatrimonyController', MemberMatrimonyController)

        MemberMatrimonyController.$inject =['$uibModalInstance','property']

        function MemberMatrimonyController($uibModalInstance, property){
            var vm = this;

            vm.memberMatrimony =[];
            vm.open = openDatePicker;
            vm.opened = false;
            vm.save = save;
            vm.cancel = cancel;

            activate();

            function activate() {


                if(!property.createOption) {
                    vm.memberMatrimony = property.itemToEdit;
                }
                return vm.memberMatrimony;

                //return getMemberMarital().then(function() {
                //    logger.info('Member Marital Information View');
                //});
            }

            //function getMemberMarital() {
            //    return dataservice.getMemberMarital(property.itemToEdit.id).then(function(data) {
            //        vm.memberMarital = $filter('filter')(data, {id:property.itemToEdit.id})[0];
            //        return vm.memberMarital;
            //    });
            //}

            function openDatePicker($event) {
                $event.preventDefault();
                $event.stopPropagation();
                vm.opened = true;
            }

            function cancel(){
                $uibModalInstance.dismiss();
            }

            function save(item){
                $uibModalInstance.close(vm.memberMatrimony);
            }

        }
    }

)();
