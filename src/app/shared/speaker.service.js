var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var Subject_1 = require('rxjs/Subject');
var core_1 = require('@angular/core');
var SpeakerService = (function () {
    function SpeakerService() {
        this.speakerChanged = new Subject_1.Subject();
        this.speakerList = [];
    }
    SpeakerService.prototype.getSpeakerListByMeetupId = function (id) {
        return this.speakerList.filter(function (speaker) { return speaker.meetupId === id; });
    };
    SpeakerService.prototype.getSpeakerList = function () {
        return this.speakerList;
    };
    SpeakerService.prototype.addSpeaker = function (speakers) {
        for (var _i = 0; _i < speakers.length; _i++) {
            var speaker = speakers[_i];
            this.speakerList.push(speaker);
        }
    };
    SpeakerService.prototype.updateSpeakers = function (curMeetupId, speakers) {
        var meetupSpeakerList = this.getSpeakerListByMeetupId(curMeetupId);
        for (var _i = 0; _i < meetupSpeakerList.length; _i++) {
            var speaker = meetupSpeakerList[_i];
            var foundSpeakerList = speakers.filter(function (updatedSpeaker) { return updatedSpeaker.employeeId === speaker.employeeId; });
            if (!foundSpeakerList.length) {
                var deletedSpeaker = this.speakerList.filter(function (deletedSpeaker) { return deletedSpeaker.employeeId === speaker.employeeId
                    && deletedSpeaker.meetupId === curMeetupId; })[0];
                var index = this.speakerList.indexOf(deletedSpeaker);
                this.speakerList.splice(index, 1);
            }
        }
        for (var _a = 0; _a < speakers.length; _a++) {
            var updatedSpeaker = speakers[_a];
            var index = this.speakerList.map(function (speaker) { return speaker.employeeId; }).indexOf(updatedSpeaker.employeeId);
            if (!~index) {
                this.speakerList.push(updatedSpeaker);
            }
            else {
                this.speakerList[index] = updatedSpeaker;
            }
        }
        this.speakerChanged.next(this.getSpeakerListByMeetupId(curMeetupId));
    };
    SpeakerService.prototype.isEmployeeSpeaker = function (employeeId) {
        var speakersArr = this.speakerList.filter(function (speaker) { return speaker.employeeId === employeeId; });
        return speakersArr.length > 0;
    };
    SpeakerService.prototype.setSpeakers = function (speakers) {
        this.speakerList = speakers;
        this.speakerChanged.next(this.speakerList.slice());
    };
    SpeakerService = __decorate([
        core_1.Injectable()
    ], SpeakerService);
    return SpeakerService;
})();
exports.SpeakerService = SpeakerService;
//# sourceMappingURL=speaker.service.js.map