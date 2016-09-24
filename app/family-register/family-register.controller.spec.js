describe("Testing a family register relatived functions", function(){
    var familyDataById =  {
        id: 1160,
        address1: "19 Southwood Circle",
        address2: null,
        city: "Syosset",
        state: "NY",
        zipcode: "11791",
        country: "US",
        homePhone: "516-802-2776",
        workPhone: null,
        faxNumber: null,
        region: null,
        subregion: null,
        createdDate: "2002-12-01T00:00:00",
        lastUpdatedDate: "2014-05-04T14:18:07",
        familyMember: [
            {
                id: 439,
                englishLastName: "JongHyun",
                englishFirstName: "JongHyun",
                koreanLastName: "백",
                koreanFirstName: "종현",
                baptismName: "Stephano",
                sex: "M",
                relation: "배우자",
                birthDate: "1969-07-23T00:00:00",
                baptizedDate: "1990-07-23T00:00:00",
                confirmationDate: "2000-07-23T00:00:00",
                marriedDate: "2000-07-23T00:00:00",
                generalInformation: {
                    personId: 439,
                    englishLastName: "JongHyun",
                    englishFirstName: "JongHyun",
                    koreanLastName: "백",
                    koreanFirstName: "종현",
                    birthDate: "1969-07-23T00:00:00",
                    birthPlace: "Seoul",
                    sex: "M",
                    relation: 1,
                    occupation: "Software Enginner",
                    status: 1,
                    statusDate: "2011-12-02T00:00:00",
                    createdDate: "2002-12-01T00:00:00",
                    lastedUpdatedDate: "2016-06-21T23:59:11"
                },
                baptismInformation: {
                    personId: 439,
                    baptismId: 1220,
                    engBaptismName: "Stephano",
                    koreanBaptismName: "스테파노1",
                    baptizedDate: "1990-07-23T00:00:00",
                    baptizedChurch: "SadangDong Church",
                    firstCommunion: true,
                    priestId: 1,
                    priest: "김문수 앤드류",
                    father: "백병기",
                    mother: "강삼숙",
                    godFather: "요셉",
                    godMother: "",
                    createdDate: "2014-03-31T17:20:57",
                    lastedUpdatedDate: "2016-06-22T00:28:40"
                },
                confirmationInformation: {
                    personId: 439,
                    confirmationId: 810,
                    confirmationDate: "2000-07-23T00:00:00",
                    confirmationChurch: "SadangDong Church",
                    priestId: 1,
                    priest: "김문수 앤드류",
                    father: "백병기",
                    mother: "강삼숙",
                    godFather: "요셉",
                    godMother: "",
                    createdDate: "2014-04-01T14:19:18",
                    lastedUpdatedDate: "2016-06-22T00:44:04"
                },
                maritalInformation: {
                    personId: 439,
                    maritalId: 288,
                    marriedDate: "2000-07-23T00:00:00",
                    marriedChurch: "SadangDong Church",
                    priest: "",
                    createdDate: "2014-04-01T15:17:17",
                    lastedUpdatedDate: "2016-06-22T00:56:48"
                }
            },
            {
                id: 440,
                englishLastName: "Kim",
                englishFirstName: "Ok",
                koreanLastName: "김",
                koreanFirstName: "옥",
                baptismName: "Teresa",
                sex: "F",
                relation: "배우자",
                birthDate: "1973-12-02T00:00:00",
                baptizedDate: "2003-04-19T00:00:00",
                confirmationDate: "2003-04-19T00:00:00",
                marriedDate: null,
                generalInformation: {
                    personId: 440,
                    englishLastName: "Kim",
                    englishFirstName: "Ok",
                    koreanLastName: "김",
                    koreanFirstName: "옥",
                    birthDate: "1973-12-02T00:00:00",
                    birthPlace: "대한민국",
                    sex: "F",
                    relation: 1,
                    occupation: "",
                    status: 2,
                    statusDate: "2015-05-21T17:50:42",
                    createdDate: "2002-12-01T00:00:00",
                    lastedUpdatedDate: "2014-03-31T15:49:38"
                },
                baptismInformation: {
                    personId: 440,
                    baptismId: 1221,
                    engBaptismName: "Teresa",
                    koreanBaptismName: "데레사",
                    baptizedDate: "2003-04-19T00:00:00",
                    baptizedChurch: "베이사이드 한인 천주교회",
                    firstCommunion: true,
                    priestId: null,
                    priest: null,
                    father: "",
                    mother: "",
                    godFather: "",
                    godMother: "",
                    createdDate: "2014-03-31T17:20:57",
                    lastedUpdatedDate: "2014-08-17T20:32:42"
                },
                confirmationInformation: {
                    personId: 440,
                    confirmationId: 811,
                    confirmationDate: "2003-04-19T00:00:00",
                    confirmationChurch: "베이사이드 한인 천주교회",
                    priestId: null,
                    priest: null,
                    father: "",
                    mother: "",
                    godFather: "",
                    godMother: "",
                    createdDate: "2014-04-01T14:19:18",
                    lastedUpdatedDate: "2014-04-01T14:19:18"
                },
                maritalInformation: {
                    personId: 440,
                    maritalId: 289,
                    marriedDate: null,
                    marriedChurch: "",
                    priest: "",
                    createdDate: "2014-04-01T15:17:17",
                    lastedUpdatedDate: "2015-03-15T15:05:06"
                }
            },
            {
                id: 441,
                englishLastName: "Kang",
                englishFirstName: "Sam Suk",
                koreanLastName: "강",
                koreanFirstName: "삼숙",
                baptismName: "Cecilia",
                sex: "F",
                relation: "부모",
                birthDate: "1933-06-27T00:00:00",
                baptizedDate: "1952-08-13T00:00:00",
                confirmationDate: "1953-05-24T00:00:00",
                marriedDate: null,
                generalInformation: {
                    personId: 441,
                    englishLastName: "Kang",
                    englishFirstName: "Sam Suk",
                    koreanLastName: "강",
                    koreanFirstName: "삼숙",
                    birthDate: "1933-06-27T00:00:00",
                    birthPlace: "",
                    sex: "F",
                    relation: 4,
                    occupation: "",
                    status: 2,
                    statusDate: "2015-05-21T17:50:51",
                    createdDate: "2002-12-01T00:00:00",
                    lastedUpdatedDate: "2014-03-31T15:49:38"
                },
                baptismInformation: {
                    personId: 441,
                    baptismId: 1222,
                    engBaptismName: "Cecilia",
                    koreanBaptismName: "세실리아",
                    baptizedDate: "1952-08-13T00:00:00",
                    baptizedChurch: "인천 계산동",
                    firstCommunion: true,
                    priestId: null,
                    priest: null,
                    father: "",
                    mother: "",
                    godFather: "",
                    godMother: "",
                    createdDate: "2014-03-31T17:20:57",
                    lastedUpdatedDate: "2014-08-17T20:32:49"
                },
                confirmationInformation: {
                    personId: 441,
                    confirmationId: 812,
                    confirmationDate: "1953-05-24T00:00:00",
                    confirmationChurch: "인천 계산동",
                    priestId: null,
                    priest: null,
                    father: "",
                    mother: "",
                    godFather: "",
                    godMother: "",
                    createdDate: "2014-04-01T14:19:18",
                    lastedUpdatedDate: "2014-04-01T14:19:18"
                },
                maritalInformation: {
                    personId: 441,
                    maritalId: null,
                    marriedDate: null,
                    marriedChurch: null,
                    priest: "",
                    createdDate: null,
                    lastedUpdatedDate: null
                }
            },
            {
                id: 442,
                englishLastName: "Shin",
                englishFirstName: "HyeRin",
                koreanLastName: "신",
                koreanFirstName: "혜린",
                baptismName: "Cecilia",
                sex: "F",
                relation: "조카",
                birthDate: "1994-04-11T00:00:00",
                baptizedDate: "2009-12-24T00:00:00",
                confirmationDate: "2009-12-24T00:00:00",
                marriedDate: null,
                generalInformation: {
                    personId: 442,
                    englishLastName: "Shin",
                    englishFirstName: "HyeRin",
                    koreanLastName: "신",
                    koreanFirstName: "혜린",
                    birthDate: "1994-04-11T00:00:00",
                    birthPlace: "South Korea",
                    sex: "F",
                    relation: 11,
                    occupation: "",
                    status: 2,
                    statusDate: "2015-05-21T17:51:03",
                    createdDate: "2002-12-01T00:00:00",
                    lastedUpdatedDate: "2014-03-31T15:49:38"
                },
                baptismInformation: {
                    personId: 442,
                    baptismId: 1223,
                    engBaptismName: "Cecilia",
                    koreanBaptismName: "세실리아",
                    baptizedDate: "2009-12-24T00:00:00",
                    baptizedChurch: "베이사이드 한인 천주교회",
                    firstCommunion: true,
                    priestId: 1,
                    priest: "김문수 앤드류",
                    father: "Dong Yoon Shin",
                    mother: "Young Joo Paik",
                    godFather: "",
                    godMother: "Ok Kim",
                    createdDate: "2014-03-31T17:20:57",
                    lastedUpdatedDate: "2014-03-31T17:20:57"
                },
                confirmationInformation: {
                    personId: 442,
                    confirmationId: 813,
                    confirmationDate: "2009-12-24T00:00:00",
                    confirmationChurch: "베이사이드 한인 천주교회",
                    priestId: 1,
                    priest: "김문수 앤드류",
                    father: "",
                    mother: "",
                    godFather: "",
                    godMother: "",
                    createdDate: "2014-04-01T14:19:18",
                    lastedUpdatedDate: "2014-04-01T14:19:18"
                },
                maritalInformation: {
                    personId: 442,
                    maritalId: null,
                    marriedDate: null,
                    marriedChurch: null,
                    priest: "",
                    createdDate: null,
                    lastedUpdatedDate: null
                }
            }
        ]
    };
    var stateList =[
        {
            "stateCode":"CA",
            "stateName": "California"
        },
        {
            "stateCode":"NY",
            "stateName": "New York"
        },
        {
            "stateCode":"WA",
            "stateName": "Washington"
        }
    ];
    var countryList =[
        {
            "countryCode":"KR",
            "countryName": "Korea"
        },
        {
            "countryCode":"USA",
            "countryName": "United State"
        },
        {
            "countryCode":"UK",
            "countryName": "United Kingtom"
        }
    ];
    var regionList =[
        {
            "regionId":1,
            "regionName": "Bothell"
        },
        {
            "regionId":2,
            "regionName": "Seattle"
        },
        {
            "regionId":3,
            "regionName": "Everret"
        }
    ];
    var subRegionList =[
        {
            "subregionId": 1,
            "regionId":1,
            "subregionName": "Bothell1"
        },
        {
            "subregionId": 2,
            "regionId":1,
            "subregionName": "Bothell2"
        },
        {
            "subregionId": 3,
            "regionId":2,
            "subregionName": "Seattle1"
        },
        {
            "subregionId": 4,
            "regionId":2,
            "subregionName": "Seattle2"
        },
        {
            "subregionId": 5,
            "regionId":3,
            "subregionName": "Everret1"
        },
        {
            "subregionId": 6,
            "regionId":3,
            "subregionName": "Everret2"
        }

    ];

    var $this;
    var $q;
    var $rootScope;
    var $controller;
    var $stateParams;
    var familyRegisterService;
    var countryCodeService;
    var stateCodeService;
    var regionCodeService;
    var subregionCodeService;


    beforeEach(module('app'));

    beforeEach(inject(function(_$controller_,_$q_, _$rootScope_,_$stateParams_, _familyRegisterService_, _countryCodeService_, _stateCodeService_,_regionCodeService_,_subregionCodeService_){
        $controller = _$controller_;
        $q= _$q_;
        $rootScope = _$rootScope_;
        $stateParams = _$stateParams_;
        familyRegisterService = _familyRegisterService_;
        countryCodeService = _countryCodeService_;
        stateCodeService = _stateCodeService_;
        regionCodeService=_regionCodeService_;
        subregionCodeService=_subregionCodeService_;
    }))

    it('should load search result by id', function(){
        spyOn(familyRegisterService, 'get').and.callFake(function() {
            var deferred = $q.defer();
            deferred.resolve(familyDataById);
            return deferred.promise;
        });

        spyOn(stateCodeService, 'getAll').and.callFake(function() {
            var deferred = $q.defer();
            deferred.resolve(stateList);
            return deferred.promise;
        });

        spyOn(countryCodeService, 'getAll').and.callFake(function() {
            var deferred = $q.defer();
            deferred.resolve(countryList);
            return deferred.promise;
        });

        spyOn(regionCodeService, 'getAll').and.callFake(function() {
            var deferred = $q.defer();
            deferred.resolve(regionList);
            return deferred.promise;
        });

        spyOn(subregionCodeService, 'getAll').and.callFake(function() {
            var deferred = $q.defer();
            deferred.resolve(subRegionList);
            return deferred.promise;
        });

        $stateParams.id = 1160;
        $this = $controller('FamilyRegisterController');
        $rootScope.$apply();
        expect($this.familyList.familyMember[0].englishLastName).toBe(familyDataById.familyMember[0].englishLastName);
        expect(familyRegisterService.get).toHaveBeenCalledWith(1160);
        expect($this.stateList.length).toBe(3);
        expect($this.countryList.length).toBe(3);
        //expect($this.regionList.length).toBe(3);
        //expect($this.subregionList.length).toBe(6);

    });



});