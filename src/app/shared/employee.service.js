var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var EmployeeService = (function () {
    function EmployeeService() {
        this.employeeChanged = new Subject_1.Subject();
        this.editModeEmployeeChanged = new Subject_1.Subject();
        this.employeeList = [];
    }
    EmployeeService.prototype.getEmployeeList = function () {
        return this.employeeList.slice();
    };
    EmployeeService.prototype.getEmployeeById = function (id) {
        return this.employeeList.slice().filter(function (employee) { return employee.id === id; })[0];
    };
    EmployeeService.prototype.getEmployeeByIdArr = function (idArr) {
        return this.employeeList.slice().filter(function (employee) { return idArr.includes(employee.id); });
    };
    EmployeeService.prototype.addEmployee = function (newEmployee) {
        newEmployee.id = '_' + Math.random().toString(36).substr(2, 9);
        this.employeeList.push(newEmployee);
        this.employeeChanged.next(this.employeeList.slice());
    };
    EmployeeService.prototype.updateEmployee = function (updatedEmployee) {
        var index = this.employeeList.map(function (employee) { return employee.id; }).indexOf(updatedEmployee.id);
        this.employeeList[index] = updatedEmployee;
        this.employeeChanged.next(this.employeeList.slice());
    };
    EmployeeService.prototype.deleteEmployee = function (employeeId) {
        var index = this.employeeList.map(function (employee) { return employee.id; }).indexOf(employeeId);
        this.employeeList.splice(index, 1);
        this.employeeChanged.next(this.employeeList.slice());
    };
    EmployeeService.prototype.changeActiveStatus = function (employee, isActive) {
        var index = this.employeeList.indexOf(employee);
        this.employeeList[index].active = isActive;
        this.employeeChanged.next(this.employeeList.slice());
    };
    EmployeeService.prototype.setEmployees = function (employees) {
        this.employeeList = employees;
        this.employeeChanged.next(this.employeeList.slice());
    };
    EmployeeService = __decorate([
        core_1.Injectable()
    ], EmployeeService);
    return EmployeeService;
})();
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map