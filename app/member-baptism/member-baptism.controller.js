(function(){
    'use strict';

    angular
        .module('app')
        .controller('MemberBaptismController', MemberBaptismController)

    MemberBaptismController.$inject =['$uibModalInstance','property']

    function MemberBaptismController($uibModalInstance, property){
        var vm = this;

        vm.memberBaptism =[];
        vm.open = openDatePicker;
        vm.opened = false;
        vm.save = save;
        vm.cancel = cancel;

        activate();

        function activate() {
            if(!property.createOption) {
                vm.memberBaptism = property.itemToEdit;
            }

            return vm.memberBaptism;
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
            $uibModalInstance.close(vm.memberBaptism);
        }
    }
})();
