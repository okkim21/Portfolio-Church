describe('Testing a family search function', function(){
    var familySearchList = [
        {
            id: 1160,
            householderName: "Ok Kim",
            name: "배우자",
            englishFirstName: "Ok",
            englishLastName: "Kim",
            baptismName: "Teresa",
            sex: "F",
            relation: "배우자",
            address1: "19 Southwood Circle",
            city: "Syosset",
            state: "NY",
            zipcode: "11791",
            homePhon: null
        },
        {
            id: 1526,
            householderName: "Okhee Kim",
            name: "본인",
            englishFirstName: "Okhee",
            englishLastName: "Kim",
            baptismName: "Julia",
            sex: "M",
            relation: "본인",
            address1: "35-10 15th St.",
            city: "Flushing",
            state: "NY",
            zipcode: "11354",
            homePhon: null
        }
    ];


    var $this;
    var $q;
    var $rootScope;
    var $controller;
    var $stateParams;
    var familySearchService;


    beforeEach(module('app'));

    beforeEach(inject(function(_$controller_,_$q_, _$rootScope_,_$stateParams_, _familySearchService_){
        $controller = _$controller_;
        $q= _$q_;
        $rootScope = _$rootScope_;
        $stateParams = _$stateParams_;
        familySearchService = _familySearchService_;
    }))

    it('should load search result', function(){
        spyOn(familySearchService, 'get').and.callFake(function() {
            var deferred = $q.defer();
            deferred.resolve(familySearchList);
            return deferred.promise;
        });
        $stateParams.searchString = "김옥";
        $this = $controller('FamilySearchController');
        $rootScope.$apply();
        expect($this.familySearchList[0].englishLastName).toBe(familySearchList[0].englishLastName);
        expect($this.familySearchList[1].englishLastName).toBe(familySearchList[1].englishLastName);
        expect(familySearchService.get).toHaveBeenCalledWith('김옥');
    });


});

