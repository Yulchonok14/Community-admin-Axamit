var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var modal_component_1 = require('./modal/modal.component');
var EmployeeListComponent = (function () {
    function EmployeeListComponent(employeeService, router, route, dataStorageService) {
        this.employeeService = employeeService;
        this.router = router;
        this.route = route;
        this.dataStorageService = dataStorageService;
        this.title = "Failure employee deletion";
        this.description = "Employee can not be deleted. They are a speaker in the meetup(s).";
        this.actionButton = "Disactivate";
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.employeeList = this.employeeService.getEmployeeList();
        this.dataStorageService.getEmployees().subscribe();
        this.employeeChangeSubscription = this.employeeService.employeeChanged.
            subscribe(function (employeeList) {
            _this.employeeList = employeeList;
        });
        this.employeeEditModeSubscription = this.employeeService.editModeEmployeeChanged.
            subscribe(function (employeeId) {
            _this.editModeEmployeeId = employeeId;
        });
    };
    EmployeeListComponent.prototype.onNewEmployee = function () {
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    EmployeeListComponent.prototype.onActivateEmployee = function (id) {
        id === this.editModeEmployeeId && this.router.navigate(['/employees/', id]);
    };
    EmployeeListComponent.prototype.onShowModalForm = function (employee) {
        this.employee = employee;
        this.formModal.onActivateModalForm();
    };
    EmployeeListComponent.prototype.onDisactivateEmployee = function () {
        this.employeeService.changeActiveStatus(this.employee, false);
    };
    EmployeeListComponent.prototype.ngOnDestroy = function () {
        this.employeeChangeSubscription.unsubscribe();
        this.employeeEditModeSubscription.unsubscribe();
    };
    __decorate([
        core_1.ViewChild(modal_component_1.ModalComponent)
    ], EmployeeListComponent.prototype, "formModal");
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'app-employees-list',
            templateUrl: './employee-list.component.html',
            styleUrls: ['./employee-list.component.scss']
        })
    ], EmployeeListComponent);
    return EmployeeListComponent;
})();
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employee-list.component.js.map