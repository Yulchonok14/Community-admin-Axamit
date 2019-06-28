var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var MeetupListComponent = (function () {
    function MeetupListComponent(meetupService, router, route, dataStorageService) {
        this.meetupService = meetupService;
        this.router = router;
        this.route = route;
        this.dataStorageService = dataStorageService;
    }
    MeetupListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.meetupList = this.meetupService.getMeetupList();
        this.dataStorageService.getMeetups().subscribe();
        this.dataStorageService.getSpeakers().subscribe();
        this.dataStorageService.getEmployees().subscribe();
        this.meetupChangeSubscription = this.meetupService.meetupChanged
            .subscribe(function (meetupList) { return _this.meetupList = meetupList; });
    };
    MeetupListComponent.prototype.onNewMeetup = function () {
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    MeetupListComponent.prototype.onDeleteMeetup = function (id) {
        this.meetupService.deleteMeetupById(id);
        id === this.chosenMeetup && this.router.navigate(['/meetups']);
        this.dataStorageService.changeMeetups()
            .subscribe(function (response) {
            console.log(response);
        });
    };
    MeetupListComponent.prototype.ngOnDestroy = function () {
        this.meetupChangeSubscription.unsubscribe();
    };
    MeetupListComponent = __decorate([
        core_1.Component({
            selector: 'app-meetup-list',
            templateUrl: './meetup-list.component.html',
            styleUrls: ['./meetup-list.component.scss']
        })
    ], MeetupListComponent);
    return MeetupListComponent;
})();
exports.MeetupListComponent = MeetupListComponent;
//# sourceMappingURL=meetup-list.component.js.map