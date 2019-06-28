var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var MeetupDetailComponent = (function () {
    function MeetupDetailComponent(route, meetupService, speakerService, employeeService) {
        this.route = route;
        this.meetupService = meetupService;
        this.speakerService = speakerService;
        this.employeeService = employeeService;
        this.employeeArr = [];
        this.imagePath = '../../assets';
        this.slideConfig = {
            "slidesToShow": 2,
            "slidesToScroll": 2,
            "infinite": false
        };
    }
    MeetupDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var employeeIdArr = [];
        this.route.params.
            subscribe(function (param) {
            _this.meetupId = param['id'];
            if (_this.meetupItem) {
                _this.carousel.unslick();
            }
            _this.meetupItem = _this.meetupService.getMeetupById(_this.meetupId);
            _this.meetupItem.speakers = _this.speakerService.getSpeakerListByMeetupId(_this.meetupId);
            employeeIdArr = _this.meetupItem.speakers.map(function (speaker) { return speaker.employeeId; });
            _this.employeeArr = _this.employeeService.getEmployeeByIdArr(employeeIdArr);
        });
        this.speakerChangeSubscription = this.speakerService.speakerChanged.
            subscribe(function (speakerList) {
            return _this.meetupItem.speakers = speakerList;
        });
    };
    MeetupDetailComponent.prototype.ngOnDestroy = function () {
        this.speakerChangeSubscription.unsubscribe();
    };
    __decorate([
        core_1.ViewChild('slickModal')
    ], MeetupDetailComponent.prototype, "carousel");
    MeetupDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-meetup-detail',
            templateUrl: './meetup-detail.component.html',
            styleUrls: ['./meetup-detail.component.scss']
        })
    ], MeetupDetailComponent);
    return MeetupDetailComponent;
})();
exports.MeetupDetailComponent = MeetupDetailComponent;
//# sourceMappingURL=meetup-detail.component.js.map