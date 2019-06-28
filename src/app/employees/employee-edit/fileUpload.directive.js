var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var FileUploadDirective = (function () {
    function FileUploadDirective() {
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    FileUploadDirective.prototype.ngOnChanges = function (changes) {
        if (changes.input) {
            this.onChange(String(changes.input));
            this.onTouched();
        }
    };
    FileUploadDirective.prototype.onChange = function (val) { };
    ;
    FileUploadDirective.prototype.onTouched = function () { };
    ;
    FileUploadDirective.prototype.writeValue = function (value) { };
    FileUploadDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    FileUploadDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    __decorate([
        core_1.Input()
    ], FileUploadDirective.prototype, "input");
    FileUploadDirective = __decorate([
        core_1.Directive({
            selector: "[fileUpload]",
            providers: [
                { provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return FileUploadDirective; }), multi: true }
            ]
        })
    ], FileUploadDirective);
    return FileUploadDirective;
})();
exports.FileUploadDirective = FileUploadDirective;
//# sourceMappingURL=fileUpload.directive.js.map