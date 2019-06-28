var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var MeetupItemComponent = (function () {
    function MeetupItemComponent(router, route) {
        this.router = router;
        this.route = route;
        this.deleteMeetup = new core_1.EventEmitter();
        this.chosenMeetup = new core_1.EventEmitter();
    }
    MeetupItemComponent.prototype.ngOnInit = function () {
    };
    MeetupItemComponent.prototype.onDeleteMeetup = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.deleteMeetup.emit();
    };
    MeetupItemComponent.prototype.onEditMeetup = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.router.navigate([this.meetupItem.id, 'edit'], { relativeTo: this.route });
    };
    __decorate([
        core_1.Input()
    ], MeetupItemComponent.prototype, "meetupItem");
    __decorate([
        core_1.Output()
    ], MeetupItemComponent.prototype, "deleteMeetup");
    __decorate([
        core_1.Output()
    ], MeetupItemComponent.prototype, "chosenMeetup");
    MeetupItemComponent = __decorate([
        core_1.Component({
            selector: 'app-meetup-item',
            templateUrl: './meetup-item.component.html',
            styleUrls: ['./meetup-item.component.scss']
        })
    ], MeetupItemComponent);
    return MeetupItemComponent;
})();
exports.MeetupItemComponent = MeetupItemComponent;
//# sourceMappingURL=meetup-item.component.js.map