var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var MeetupResolverService = (function () {
    function MeetupResolverService(dataStorageService, meetupService) {
        this.dataStorageService = dataStorageService;
        this.meetupService = meetupService;
    }
    MeetupResolverService.prototype.resolve = function (route, state) {
        var meetups = this.meetupService.getMeetupList();
        if (meetups.length == 0) {
            return this.dataStorageService.getMeetups();
        }
        else {
            return meetups;
        }
    };
    MeetupResolverService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], MeetupResolverService);
    return MeetupResolverService;
})();
exports.MeetupResolverService = MeetupResolverService;
//# sourceMappingURL=meetup-resolver.service.js.map