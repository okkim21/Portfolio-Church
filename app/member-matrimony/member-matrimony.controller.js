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
            $uibModalInstance.close(vm.memberMatrimony);
        }
    }
})();
