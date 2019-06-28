var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var ModalComponent = (function () {
    function ModalComponent() {
        this.disactivateEmployee = new core_1.EventEmitter();
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.onActivateModalForm = function () {
        $('#modalForm').modal('show');
    };
    ModalComponent.prototype.onDisactivateEmployee = function () {
        this.disactivateEmployee.emit();
        $('#modalForm').modal('hide');
    };
    __decorate([
        core_1.Input()
    ], ModalComponent.prototype, "title");
    __decorate([
        core_1.Input()
    ], ModalComponent.prototype, "description");
    __decorate([
        core_1.Input()
    ], ModalComponent.prototype, "actionButton");
    __decorate([
        core_1.Output()
    ], ModalComponent.prototype, "disactivateEmployee");
    ModalComponent = __decorate([
        core_1.Component({
            selector: 'app-modal',
            templateUrl: './modal.component.html',
            styleUrls: ['./modal.component.scss']
        })
    ], ModalComponent);
    return ModalComponent;
})();
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=modal.component.js.map