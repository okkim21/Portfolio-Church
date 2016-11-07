(function(){
    'use strict';

    angular
        .module('app')
        .controller('MemberConfirmationController', MemberConfirmationController)

    MemberConfirmationController.$inject =['$uibModalInstance','property']

    function MemberConfirmationController($uibModalInstance, property){
        var vm = this;

        vm.memberConfirmation =[];
        vm.open = openDatePicker;
        vm.opened = false;
        vm.save = save;
        vm.cancel = cancel;

        activate();

        function activate() {

            if(!property.createOption) {
                vm.memberConfirmation = property.itemToEdit;
            }
            return vm.memberConfirmation;
        }

        function openDatePicker($event) {
            $event.preventDefault();
            $event.stopPropagation();
            vm.opened = true;
        }

        function cancel(){
            $uibModalInstance.dismiss();
        }

        function save(item){
            $uibModalInstance.close(vm.memberConfirmation);
        }

    }
})();
