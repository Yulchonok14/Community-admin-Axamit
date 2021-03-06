var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var MeetupsComponent = (function () {
    function MeetupsComponent() {
    }
    MeetupsComponent.prototype.ngOnInit = function () {
    };
    MeetupsComponent = __decorate([
        core_1.Component({
            selector: 'app-meetups',
            templateUrl: './meetups.component.html',
            styleUrls: ['./meetups.component.scss']
        })
    ], MeetupsComponent);
    return MeetupsComponent;
})();
exports.MeetupsComponent = MeetupsComponent;
//# sourceMappingURL=meetups.component.js.map