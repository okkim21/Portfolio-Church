describe("Testing dashboard", function(){
    var familyStatData  = {
       "familyTotal" : 200,
       "familyMemberTotal" : 1000,
       "moveOutFamilyTotal":100,
       "details":[
           {
               "yearmonth":"2015/07",
               "registeredFamilyCount": 1,
               "registeredFamilyMemberCount": 3,
               "MoveOutFamilyCount": 0
           },
           {
               "yearmonth":"2015/08",
               "registeredFamilyCount": 0,
               "registeredFamilyMemberCount": 0,
               "MoveOutFamilyCount": 0
           },
           {
               "yearmonth":"2015/09",
               "registeredFamilyCount": 2,
               "registeredFamilyMemberCount": 7,
               "MoveOutFamilyCount": 1
           },
           {
               "yearmonth":"2015/10",
               "registeredFamilyCount": 1,
               "registeredFamilyMemberCount": 4,
               "MoveOutFamilyCount": 0
           },
           {
               "yearmonth":"2015/11",
               "registeredFamilyCount": 0,
               "registeredFamilyMemberCount": 0,
               "MoveOutFamilyCount": 2
           },
           {
               "yearmonth":"2015/12",
               "registeredFamilyCount": 3,
               "registeredFamilyMemberCount": 11,
               "MoveOutFamilyCount": 1
           }
       ]};
    var offeringStatByWeekData ={"contractOffering": [
        {
            "week":"2nd week of Feb",
            "amount": 2000
        },
        {
            "week":"3th week of Feb",
            "amount": 1500
        },
        {
            "week":"4th Week of Feb",
            "amount": 2500
        },
        {
            "week":"1st Week of Mar",
            "amount": 2100
        }
    ]
        ,
        "thanksOffering": [
            {
                "week":"2nd week of Feb",
                "amount": 500
            },
            {
                "week":"3th week of Feb",
                "amount": 400
            },
            {
                "week":"4th Week of Feb",
                "amount": 550
            },
            {
                "week":"1st Week of Mar",
                "amount": 650
            }
        ]
        ,
        "offering": [
            {
                "week":"2nd week of Feb",
                "amount": 3000
            },
            {
                "week":"3th week of Feb",
                "amount": 3500
            },
            {
                "week":"4th Week of Feb",
                "amount": 4000
            },
            {
                "week":"1st Week of Mar",
                "amount": 3300
            }
        ]

    };
    var offeringStatByMonthData = {"contractOffering": [
        {
            "yearmonth":"2015/12",
            "amount": 6000
        },
        {
            "yearmonth":"2016/01",
            "amount": 5000
        },
        {
            "yearmonth":"2016/02",
            "amount": 7000
        },
        {
            "yearmonth":"2016/03",
            "amount": 7800
        }
    ]
        ,
        "thanksOffering": [
            {
                "yearmonth":"2015/12",
                "amount": 2000
            },
            {
                "yearmonth":"2016/01",
                "amount": 1500
            },
            {
                "yearmonth":"2016/02",
                "amount": 1000
            },
            {
                "yearmonth":"2016/03",
                "amount": 1100
            }
        ]
        ,
        "offering": [
            {
                "yearmonth":"2015/12",
                "amount": 10000
            },
            {
                "yearmonth":"2016/01",
                "amount": 12000
            },
            {
                "yearmonth":"2016/02",
                "amount": 13000
            },
            {
                "yearmonth":"2016/03",
                "amount": 12500
            }
        ]

    };
    var $controller;
    var $this;
    var $stateParams;
    var $q;
    var $rootScope;
    var dataservice;

    beforeEach(module('app'));

    beforeEach(inject(function(_$controller_, _$stateParams_, _$q_,_$rootScope_,_dataservice_){
        $controller = _$controller_;
        $stateParams = _$stateParams_;
        $rootScope = _$rootScope_;
        $q=_$q_;
        dataservice = _dataservice_;

    }));

    it("should load data for chart", function(){
        spyOn(dataservice, 'getFamilyStatData').and.callFake(function(){
            var deferred = $q.defer();
            deferred.resolve(familyStatData);
            return deferred.promise;
        });

        spyOn(dataservice, 'getOfferingStatByWeekly').and.callFake(function(){
            var deferred = $q.defer();
            deferred.resolve(offeringStatByWeekData);
            return deferred.promise;
        });

        spyOn(dataservice, 'getOfferingStatByMonthly').and.callFake(function(){
            var deferred = $q.defer();
            deferred.resolve(offeringStatByMonthData);
            return deferred.promise;
        });

        $stateParams.subscriberId = 1;
        $this = $controller('DashBoardController');
        $rootScope.$apply();

        expect($this.familyStatList.familyTotal).toBe(familyStatData.familyTotal);
        expect($this.offeringStatByWeek.contractOffering[0].amount).toBe(offeringStatByWeekData.contractOffering[0].amount);
        expect($this.offeringStatByMonth.contractOffering[0].amount).toBe(offeringStatByMonthData.contractOffering[0].amount);
    })
});