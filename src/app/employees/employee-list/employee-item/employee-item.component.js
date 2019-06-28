var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var EmployeeItemComponent = (function () {
    function EmployeeItemComponent(router, route, speakerService, employeeService, dataStorageService) {
        this.router = router;
        this.route = route;
        this.speakerService = speakerService;
        this.employeeService = employeeService;
        this.dataStorageService = dataStorageService;
        this.activateEmployee = new core_1.EventEmitter();
        this.showModalForm = new core_1.EventEmitter();
        this.pathToImages = '../../../assets/';
    }
    EmployeeItemComponent.prototype.ngOnInit = function () {
    };
    EmployeeItemComponent.prototype.onEditEmployee = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.router.navigate([this.employeeItem.id + '/edit'], { relativeTo: this.route });
    };
    EmployeeItemComponent.prototype.onActivateEmployee = function (e) {
        this.employeeItem.active = !this.employeeItem.active;
        e.stopPropagation();
        e.preventDefault();
        this.activateEmployee.emit();
    };
    EmployeeItemComponent.prototype.onDeleteEmployee = function (e, employeeId) {
        e.stopPropagation();
        e.preventDefault();
        if (this.speakerService.isEmployeeSpeaker(employeeId)) {
            this.showModalForm.emit(this.employeeItem);
        }
        else {
            this.employeeService.deleteEmployee(employeeId);
            this.dataStorageService.changeEmployees()
                .subscribe(function (response) {
                console.log(response);
            });
        }
    };
    __decorate([
        core_1.Input()
    ], EmployeeItemComponent.prototype, "employeeItem");
    __decorate([
        core_1.Output()
    ], EmployeeItemComponent.prototype, "activateEmployee");
    __decorate([
        core_1.Output()
    ], EmployeeItemComponent.prototype, "showModalForm");
    EmployeeItemComponent = __decorate([
        core_1.Component({
            selector: 'app-employee-item',
            templateUrl: './employee-item.component.html',
            styleUrls: ['./employee-item.component.scss']
        })
    ], EmployeeItemComponent);
    return EmployeeItemComponent;
})();
exports.EmployeeItemComponent = EmployeeItemComponent;
//# sourceMappingURL=employee-item.component.js.map