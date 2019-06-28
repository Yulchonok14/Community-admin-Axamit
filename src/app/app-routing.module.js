var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var employee_detail_component_1 = require('./employees/employee-detail/employee-detail.component');
var employees_component_1 = require('./employees/employees.component');
var employee_edit_component_1 = require('./employees/employee-edit/employee-edit.component');
var meetups_component_1 = require('./meetups/meetups.component');
var meetup_detail_component_1 = require('./meetups/meetup-detail/meetup-detail.component');
var meetup_edit_component_1 = require('./meetups/meetup-edit/meetup-edit.component');
var signin_component_1 = require("./auth/signin/signin.component");
var auth_guard_service_1 = require('./auth/auth-guard.service');
var meetup_resolver_service_1 = require('./meetups/meetup-resolver.service');
var speaker_resolver_service_1 = require('./meetups/speaker-resolver.service');
var employee_resolver_service_1 = require('./employees/employee-resolver.service');
var appRoutes = [
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    {
        path: 'employees', component: employees_component_1.EmployeesComponent, children: [
            { path: 'new', component: employee_edit_component_1.EmployeeEditComponent },
            { path: ':id', component: employee_detail_component_1.EmployeeDetailComponent, resolve: [employee_resolver_service_1.EmployeeResolverService] },
            { path: ':id/edit', component: employee_edit_component_1.EmployeeEditComponent, resolve: [employee_resolver_service_1.EmployeeResolverService] },
        ], canActivate: [auth_guard_service_1.AuthGuardService]
    },
    {
        path: 'meetups', component: meetups_component_1.MeetupsComponent, children: [
            { path: 'new', component: meetup_edit_component_1.MeetupEditComponent },
            { path: ':id', component: meetup_detail_component_1.MeetupDetailComponent, resolve: [meetup_resolver_service_1.MeetupResolverService, employee_resolver_service_1.EmployeeResolverService, speaker_resolver_service_1.SpeakerResolverService] },
            { path: ':id/edit', component: meetup_edit_component_1.MeetupEditComponent, resolve: [meetup_resolver_service_1.MeetupResolverService, employee_resolver_service_1.EmployeeResolverService, speaker_resolver_service_1.SpeakerResolverService] }
        ], canActivate: [auth_guard_service_1.AuthGuardService]
    },
    { path: 'signin', component: signin_component_1.SigninComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
})();
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map