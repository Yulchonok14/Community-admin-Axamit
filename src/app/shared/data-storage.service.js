var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var operators_1 = require('rxjs/operators');
var DataStorageService = (function () {
    function DataStorageService(http, authService, employeeService, meetupService, speakerService) {
        this.http = http;
        this.authService = authService;
        this.employeeService = employeeService;
        this.meetupService = meetupService;
        this.speakerService = speakerService;
    }
    DataStorageService.prototype.changeMeetups = function () {
        //const token = this.authService.getToken();
        return this.http.put('https://community-affea.firebaseio.com/meetups.json', this.meetupService.getMeetupList());
    };
    DataStorageService.prototype.getMeetups = function () {
        //const token = this.authService.getToken();
        var _this = this;
        return this.http.get('https://community-affea.firebaseio.com/meetups.json?')
            .pipe(operators_1.tap(function (meetups) {
            _this.meetupService.setMeetups(meetups);
        }));
    };
    DataStorageService.prototype.getSpeakers = function () {
        var _this = this;
        return this.http.get('https://community-affea.firebaseio.com/speakers.json?')
            .pipe(operators_1.tap(function (speakers) {
            _this.speakerService.setSpeakers(speakers);
        }));
    };
    DataStorageService.prototype.changeSpeakers = function () {
        //const token = this.authService.getToken();
        return this.http.put('https://community-affea.firebaseio.com/speakers.json', this.speakerService.getSpeakerList());
        /*return this.http.put('https://community-affea.firebaseio.com/speakers.json',
         this.speakerService.getSpeakerList());*/
    };
    DataStorageService.prototype.changeEmployees = function () {
        //const token = this.authService.getToken();
        return this.http.put('https://community-affea.firebaseio.com/employees.json', this.employeeService.getEmployeeList());
        /*return this.http.put('https://community-affea.firebaseio.com/employees.json',
            this.employeeService.getEmployeeList());*/
    };
    DataStorageService.prototype.getEmployees = function () {
        //const token = this.authService.getToken();
        var _this = this;
        return this.http.get('https://community-affea.firebaseio.com/employees.json')
            .pipe(operators_1.tap(function (employees) {
            _this.employeeService.setEmployees(employees);
        }));
        /*return this.http.get<Employee[]>('https://community-affea.firebaseio.com/employees.json')
            .subscribe(
                (employees) => {
                    this.employeeService.setEmployees(employees);
                }
            );*/
    };
    DataStorageService = __decorate([
        core_1.Injectable()
    ], DataStorageService);
    return DataStorageService;
})();
exports.DataStorageService = DataStorageService;
//# sourceMappingURL=data-storage.service.js.map