var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var SpeakerItemComponent = (function () {
    function SpeakerItemComponent() {
    }
    SpeakerItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], SpeakerItemComponent.prototype, "speakerItem");
    __decorate([
        core_1.Input()
    ], SpeakerItemComponent.prototype, "employeeItem");
    SpeakerItemComponent = __decorate([
        core_1.Component({
            selector: 'app-speaker-item',
            templateUrl: './speaker-item.component.html',
            styleUrls: ['./speaker-item.component.scss']
        })
    ], SpeakerItemComponent);
    return SpeakerItemComponent;
})();
exports.SpeakerItemComponent = SpeakerItemComponent;
//# sourceMappingURL=speaker-item.component.js.map