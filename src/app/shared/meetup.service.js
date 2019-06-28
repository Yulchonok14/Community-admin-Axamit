var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var MeetupService = (function () {
    function MeetupService() {
        this.meetupChanged = new Subject_1.Subject();
        this.meetupList = [];
    }
    MeetupService.prototype.getMeetupList = function () {
        return this.meetupList.slice();
    };
    MeetupService.prototype.getMeetupById = function (id) {
        var index = this.meetupList.map(function (meetup) { return meetup.id; }).indexOf(id);
        return this.meetupList.slice()[index];
    };
    MeetupService.prototype.deleteMeetupById = function (id) {
        var index = this.meetupList.map(function (meetup) { return meetup.id; }).indexOf(id);
        this.meetupList.splice(index, 1);
        this.meetupChanged.next(this.meetupList.slice());
    };
    MeetupService.prototype.addMeetup = function (meetup) {
        this.meetupList.push(meetup);
        this.meetupChanged.next(this.meetupList.slice());
    };
    MeetupService.prototype.updateMeetup = function (updatedMeetup) {
        var index = this.meetupList.map(function (meetup) { return meetup.id; }).indexOf(updatedMeetup.id);
        this.meetupList[index] = updatedMeetup;
        this.meetupChanged.next(this.meetupList.slice());
    };
    MeetupService.prototype.setMeetups = function (employees) {
        this.meetupList = employees;
        this.meetupChanged.next(this.meetupList.slice());
    };
    MeetupService = __decorate([
        core_1.Injectable()
    ], MeetupService);
    return MeetupService;
})();
exports.MeetupService = MeetupService;
//# sourceMappingURL=meetup.service.js.map