var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var EmployeeResolverService = (function () {
    function EmployeeResolverService(employeeService, dataStorageService) {
        this.employeeService = employeeService;
        this.dataStorageService = dataStorageService;
    }
    EmployeeResolverService.prototype.resolve = function (route, state) {
        var employees = this.employeeService.getEmployeeList();
        if (employees.length == 0) {
            return this.dataStorageService.getEmployees();
        }
        else {
            return employees;
        }
    };
    EmployeeResolverService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], EmployeeResolverService);
    return EmployeeResolverService;
})();
exports.EmployeeResolverService = EmployeeResolverService;
//# sourceMappingURL=employee-resolver.service.js.map