(function(){
        'use strict';

        angular
            .module('app')
            .controller('FamilyRegisterController', FamilyRegisterController)

        FamilyRegisterController.$inject =['$q','$uibModal','$stateParams','exception','logger','familyRegisterService','stateCodeService','countryCodeService','regionCodeService','subregionCodeService','memberGeneralService','memberBaptismService','memberConfirmationService','memberMatrimonyService']

        function FamilyRegisterController($q, $uibModal ,$stateParams,exception,logger, familyRegisterService, stateCodeService, countryCodeService, regionCodeService, subregionCodeService,memberGeneralService,memberBaptismService,memberConfirmationService,memberMatrimonyService){
            var vm = this;
            var familyIdParam =$stateParams.id;

            vm.familyList =[];
            vm.stateList =[];
            vm.regionList=[];
            vm.countryList=[];
            vm.subregionList=[];
            vm.editMemberGeneral = editMemberGeneral;
            vm.addMemberGeneral = addMemberGeneral;
            vm.addEditMemberBaptism = addEditMemberBaptism;
            vm.addEditMemberConfirmation = addEditMemberConfirmation;
            vm.addEditMemberMatrimony = addEditMemberMatrimony;
            vm.update = update;
            vm.save = save;

            activate();

            function activate() {
                if($stateParams.id) {
                    vm.createOption = false;

                    var promises = [getFamily(), getState(), getCountry(), getRegion(), getSubregion()];

                    return $q.all(promises).then(function () {
                        var memberGeneralInfo = _.map(vm.familyList.familyMember, mapToMember);
                        vm.memberSources = [memberGeneralInfo];
                    });
                }
                else
                {
                    vm.createOption = true;

                    var promises = [getState(), getCountry(), getRegion(), getSubregion()];

                    return $q.all(promises);

                }
            }

            function getFamily() {
                return familyRegisterService.get(familyIdParam)
                    .then(function (result) {
                        return vm.familyList = result;
                    },
                    function (response) {
                        exception.catcher('에러' +'(' + response.status + ')' + '가 발생했습니다')

                    });

            }

            function update (family){

                var data =JSON.stringify({
                    "address1" : family.address1,
                    "address2" : family.address2,
                    "city" : family.city,
                    "country" : family.country,
                    "faxNumber" : family.faxNumber,
                    "mobilePhone": family.mobilePhone,
                    "homePhone" : family.homePhone,
                    "id" : family.id,
                    "state" : family.state,
                    "subregion" : family.subregion,
                    "workPhone" : family.workPhone,
                    "zipcode" : family.zipcode
                });

                familyRegisterService.update(data,familyIdParam)
                    .then(function () {
                        logger.info('가족 정보가 수정되었습니다.');
                    },
                    function (response) {
                        exception.catcher('에러' +'(' + response.status + ')' + '가 발생했습니다');
                    });
            }

            function save(family){
                var data =JSON.stringify({
                    "address1" : family.address1,
                    "address2" : family.address2,
                    "city" : family.city,
                    "country" : family.country,
                    "faxNumber" : family.faxNumber,
                    "mobilePhone": family.mobilePhone,
                    "homePhone" : family.homePhone,
                    "id" : family.id,
                    "state" : family.state,
                    "subregion" : family.subregion,
                    "workPhone" : family.workPhone,
                    "zipcode" : family.zipcode
                });

                familyRegisterService.save(data)
                    .then(function (response) {
                        vm.createOption = false;
                        familyIdParam = response.id;
                        vm.familyList.familyMember =  [];

                        addMemberGeneral();
                        logger.info('가족이 추가되었습니다.');
                    },
                    function (response) {
                        exception.catcher('에러' +'(' + response.status + ')' + '가 발생했습니다');
                    });

            }

            function getState(){
                return stateCodeService.getAll()
                    .then(function(result){
                        return vm.stateList = result;
                    }
                );
            }

            function getCountry(){
                return countryCodeService.getAll()
                    .then(function(result){
                        return vm.countryList = result;
                    }
                );
            }

            function getRegion() {
                return regionCodeService.getAll()
                    .then(function(result){
                        return vm.regionList = result;
                    }
                );

            }

            function getSubregion() {
                return subregionCodeService.getAll()
                    .then(function(result){
                        return vm.subregionList = result;
                    }
                );

            }

            function mapToMember(member){
                return {
                    id:member.id,
                    englishFirstName: member.englishFirstName,
                    englishLastName:member.englishLastName,
                    koreanLastName:member.koreanLastName,
                    koreanFirstName:member.koreanFirstName,
                    baptismName:member.baptismName,
                    sex:member.sex,
                    relation:member.relation.name,
                    birthDate:member.birthDate,
                    baptizedDate:member.baptizedDate,
                    confirmationDate:member.confirmationDate,
                    marriedDate:member.marriedDate
                };
            }

            function addMemberGeneral(){
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl:'app/member-general/member-general.html',
                    controller:'MemberGeneralController',
                    controllerAs:'memberGeneralCtrl',
                    resolve: {
                        property: function() {
                            return {
                                 createOption:true
                            };
                        }
                    },
                    size: 'lg'
                });

                modalInstance.result.then(function(result){

                    var data =JSON.stringify({
                        birthDate : result.birthDate,
                        birthPlace : result.birthPlace,
                        englishFirstName : result.englishFirstName,
                        englishLastName : result.englishLastName,
                        koreanFirstName : result.koreanFirstName,
                        koreanLastName : result.koreanLastName,
                        occupation : result.occupation,
                        relation : {id: result.relation.id, name: result.relation.name},
                        sex : result.sex,
                        status : result.status,
                        statusDate : result.statusDate
                    });

                    memberGeneralService.save(data, {familyId:familyIdParam})
                        .then(function(response) {

                            getFamily();

                            var memberGeneralInfo = _.map(vm.familyList.familyMember, mapToMember);
                            vm.memberSources = [memberGeneralInfo];

                            logger.info(response.koreanFirstName + '이(가) 추가되었습니다.');
                        },
                        function (response) {
                            exception.catcher('에러' +'(' + response.status + ')' + '가 발생했습니다');

                        });


                });
            }

            function editMemberGeneral(member){
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl:'app/member-general/member-general.html',
                    controller:'MemberGeneralController',
                    controllerAs:'memberGeneralCtrl',
                    resolve: {
                        property: function() {
                            return {
                                itemToEdit:member.generalInformation,
                                createOption:false
                            };
                        }
                    },
                    size: 'lg'
                });

                modalInstance.result.then(function(result){
                var personIdParam = result.personId;

                var data =JSON.stringify({
                    birthDate : result.birthDate,
                    birthPlace : result.birthPlace,
                    englishFirstName : result.englishFirstName,
                    englishLastName : result.englishLastName,
                    koreanFirstName : result.koreanFirstName,
                    koreanLastName : result.koreanLastName,
                    occupation : result.occupation,
                    personId : result.personId,
                    relation : {id: result.relation.id, name: result.relation.name},
                    sex : result.sex,
                    status : result.status,
                    statusDate : result.statusDate
                });

                memberGeneralService.update(data, {familyId:familyIdParam,personId:personIdParam})
                        .then(function() {
                            _.assign(member, result);
                            var index = _.findIndex(vm.memberSources[0], { 'id': personIdParam });
                            vm.memberSources[0][index] = mapToMember(result);
                            logger.info(result.koreanFirstName + '이(가) 수정되었습니다.');
                        },
                        function (response) {
                            exception.catcher('에러' +'(' + response.status + ')' + '가 발생했습니다');

                        });


                });


            }

            function addEditMemberBaptism(member){

                if (typeof member.baptismInformation.baptismId === "undefined" || member.baptismInformation.baptismId ===null) {

                    addMemberBaptism(member);
                }
                else{
                    editMemberBaptism(member);
                }

            }

            function addMemberBaptism(member){
                var modalInstance = $uibModal.open({
                    templateUrl:'app/member-baptism/member-baptism.html',
                    controller:'MemberBaptismController',
                    controllerAs:'memberBaptismCtrl',
                    resolve: {
                        property: function() {
                            return {
                                createOption:true
                            };
                        }
                    },
                    size: 'lg'
                });

                modalInstance.result.then(function(result){
                    var personIdParam = member.id;

                    var data =JSON.stringify({
                        "baptizedChurch" : result.baptizedChurch,
                        "baptizedDate" : result.baptizedDate,
                        "engBaptismName" : result.engBaptismName,
                        "father" : result.father,
                        "firstCommunion" : result.firstCommunion,
                        "godFather" : result.godFather,
                        "godMother" : result.godMother,
                        "koreanBaptismName" : result.koreanBaptismName,
                        "mother" : result.mother,
                        "personId" : personIdParam,
                        "priest" : result.priest,
                        "priestId" : result.priestId
                    });

                    memberBaptismService.save(data,{familyId:familyIdParam, personId:personIdParam})
                        .then(function(response) {
                            getFamily();
                            member.baptismName = result.engBaptismName;
                            member.baptizedDate = result.baptizedDate;

                            logger.info(member.koreanFirstName + '의 세례정보가 추가되었습니다.');
                        },
                        function (response) {
                            exception.catcher('에러' +'(' + response.status + ')' + '가 발생했습니다');

                        });

                });

            }

            function editMemberBaptism(member){
                var modalInstance = $uibModal.open({
                    templateUrl:'app/member-baptism/member-baptism.html',
                    controller:'MemberBaptismController',
                    controllerAs:'memberBaptismCtrl',
                    resolve: {
                        property: function() {
                            return {
                                itemToEdit:member.baptismInformation,
                                createOption:false
                            };
                        }
                    },
                    size: 'lg'
                });

                modalInstance.result.then(function(result){
                    var personIdParam = result.personId;
                    var baptismIdParam = result.baptismId;

                    var data =JSON.stringify({
                        "baptismId": result.baptismId,
                        "baptizedChurch" : result.baptizedChurch,
                        "baptizedDate" : result.baptizedDate,
                        "engBaptismName" : result.engBaptismName,
                        "father" : result.father,
                        "firstCommunion" : result.firstCommunion,
                        "godFather" : result.godFather,
                        "godMother" : result.godMother,
                        "koreanBaptismName" : result.koreanBaptismName,
                        "mother" : result.mother,
                        "personId" : result.personId,
                        "priest" : result.priest,
                        "priestId" : result.priestId
                        });

                    memberBaptismService.update(data,{familyId:familyIdParam,personId:personIdParam, baptismId: baptismIdParam})
                        .then(function(){
                            member.baptismName = result.engBaptismName;
                            member.baptizedDate = result.baptizedDate;
                            logger.info(member.koreanFirstName + '의 Baptism정보가 수정되었습니다.');
                        },
                        function (response) {
                            exception.catcher('에러' +'(' + response.status + ')' + '가 발생했습니다');

                        });
                        //if (member){
                        //    member.baptismName = result.engBaptismName;
                        //    member.baptizedDate = result.baptizedDate;
                        //    var index = _.findIndex(vm.memberSources[0], { 'personId': result.personId });
                        //    vm.memberSources[0][index] = mapToMember(result);
                        //}

                });

            }

            function addEditMemberConfirmation(member){

                if (typeof member.confirmationInformation.confirmationId === "undefined" || member.confirmationInformation.confirmationId===null) {
                    addMemberConfirmation(member);
                }
                else{
                    editMemberConfirmation(member);
                }

            }

            function addMemberConfirmation(member){
                var modalInstance = $uibModal.open({
                    templateUrl:'app/member-confirmation/member-confirmation.html',
                    controller:'MemberConfirmationController',
                    controllerAs:'memberConfirmationCtrl',
                    resolve: {
                        property: function() {
                            return {
                                createOption:true
                            };
                        }
                    },
                    size: 'lg'
                });

                modalInstance.result.then(function(result){
                    var personIdParam = member.id;

                    var data =JSON.stringify({
                        "confirmationChurch" : result.confirmationChurch,
                        "confirmationDate" : result.confirmationDate,
                        "confirmationId" : result.confirmationId,
                        "father" : result.father,
                        "godFather" : result.godFather,
                        "godMother" : result.godMother,
                        "mother" : result.mother,
                        "personId" : personIdParam,
                        "priest" : result.priest,
                        "priestId" : result.priestId

                    });
                    memberConfirmationService.save(data,{familyId:familyIdParam, personId:personIdParam})
                        .then(function(response){
                            getFamily();
                            member.confirmationDate = response.confirmationDate;
                            logger.info(member.koreanFirstName + '의 Confirmation정보가 추가되었습니다.');
                        },
                        function (response) {
                            exception.catcher('에러' +'(' + response.status + ')' + '가 발생했습니다');

                        });
                });

            }

            function editMemberConfirmation(member){
                var modalInstance = $uibModal.open({
                    templateUrl:'app/member-confirmation/member-confirmation.html',
                    controller:'MemberConfirmationController',
                    controllerAs:'memberConfirmationCtrl',
                    resolve: {
                        property: function() {
                            return {
                                itemToEdit:member.confirmationInformation,
                                createOption:false
                            };
                        }
                    },
                    size: 'lg'
                });

                modalInstance.result.then(function(result){
                    var personIdParam = result.personId;
                    var confirmationIdParam = result.confirmationId;

                    var data =JSON.stringify({
                        "confirmationChurch" : result.confirmationChurch,
                        "confirmationDate" : result.confirmationDate,
                        "confirmationId" : result.confirmationId,
                        "father" : result.father,
                        "godFather" : result.godFather,
                        "godMother" : result.godMother,
                        "mother" : result.mother,
                        "personId" : result.personId,
                        "priest" : result.priest,
                        "priestId" : result.priestId

                    });
                    memberConfirmationService.update(data,{familyId:familyIdParam,personId:personIdParam,confirmationId:confirmationIdParam})
                        .then(function(response){
                            member.confirmationDate = response.confirmationDate;
                            logger.info(member.koreanFirstName + '의 Confirmation정보가 수정되었습니다.');
                        },
                        function (response) {
                            exception.catcher('에러' +'(' + response.status + ')' + '가 발생했습니다');

                        });
                });

            }

            function addEditMemberMatrimony(member){

                if (typeof member.maritalInformation.maritalId === "undefined" || member.maritalInformation.maritalId===null) {
                    addMemberMatrimony(member);
                }
                else{
                    editMemberMatrimony(member);
                }

            }

            function addMemberMatrimony(member){
                var modalInstance = $uibModal.open({
                    templateUrl:'app/member-matrimony/member-matrimony.html',
                    controller:'MemberMatrimonyController',
                    controllerAs:'memberMatrimonyCtrl',
                    resolve: {
                        property: function() {
                            return {
                                createOption:true
                            };
                        }
                    },
                    size: 'lg'
                });

                modalInstance.result.then(function(result){
                    var personIdParam = member.id;

                    var data =JSON.stringify({
                        "marriedChurch" :result.marriedChurch,
                        "marriedDate" : result.marriedDate,
                        "personId" : personIdParam,
                        "priest" : result.priest

                    });
                    memberMatrimonyService.save(data,{familyId:familyIdParam,personId:personIdParam})
                        .then(function(response){
                            getFamily();
                            member.marriedDate = response.matrimonyDate;
                            logger.info(member.koreanFirstName + '의 결 정보가 추가되었습니다.');
                        },
                        function (response) {
                            exception.catcher('에러' +'(' + response.status + ')' + '가 발생했습니다');

                        });

                });

            }

            function editMemberMatrimony(member){
                var modalInstance = $uibModal.open({
                    templateUrl:'app/member-matrimony/member-matrimony.html',
                    controller:'MemberMatrimonyController',
                    controllerAs:'memberMatrimonyCtrl',
                    resolve: {
                        property: function() {
                            return {
                                itemToEdit:member.maritalInformation,
                                createOption:false
                            };
                        }
                    },
                    size: 'lg'
                });

                modalInstance.result.then(function(result){
                    var personIdParam = result.personId;
                    var matrimonyIdParam = result.maritalId;

                    var data =JSON.stringify({
                        "maritalId" : result.maritalId,
                        "marriedChurch" :result.marriedChurch,
                        "marriedDate" : result.marriedDate,
                        "personId" : result.personId,
                        "priest" : result.priest

                    });
                    memberMatrimonyService.update(data,{familyId:familyIdParam,personId:personIdParam, matrimonyId:matrimonyIdParam})
                        .then(function(response){
                            member.marriedDate = response.matrimonyDate;
                            logger.info(member.koreanFirstName + '의 결혼정보가 수정되었습니다.');
                        },
                        function (response) {
                            exception.catcher('에러' +'(' + response.status + ')' + '가 발생했습니다');

                        });

                });

            }

        }
    }

)();
