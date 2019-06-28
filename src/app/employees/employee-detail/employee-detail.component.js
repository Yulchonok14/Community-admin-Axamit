var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var EmployeeDetailComponent = (function () {
    function EmployeeDetailComponent(route, employeeService) {
        this.route = route;
        this.employeeService = employeeService;
        this.pathToImages = '../../../assets/';
    }
    EmployeeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.employeeItem = _this.employeeService.getEmployeeById(params['id']);
        });
    };
    EmployeeDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-employee-detail',
            templateUrl: './employee-detail.component.html',
            styleUrls: ['./employee-detail.component.scss']
        })
    ], EmployeeDetailComponent);
    return EmployeeDetailComponent;
})();
exports.EmployeeDetailComponent = EmployeeDetailComponent;
//# sourceMappingURL=employee-detail.component.js.map