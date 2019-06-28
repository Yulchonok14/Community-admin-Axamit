var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var SpeakerResolverService = (function () {
    function SpeakerResolverService(dataStorageService, speakerService) {
        this.dataStorageService = dataStorageService;
        this.speakerService = speakerService;
    }
    SpeakerResolverService.prototype.resolve = function (route, state) {
        var speakers = this.speakerService.getSpeakerList();
        if (speakers.length == 0) {
            return this.dataStorageService.getSpeakers();
        }
        else {
            return speakers;
        }
    };
    SpeakerResolverService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], SpeakerResolverService);
    return SpeakerResolverService;
})();
exports.SpeakerResolverService = SpeakerResolverService;
//# sourceMappingURL=speaker-resolver.service.js.map