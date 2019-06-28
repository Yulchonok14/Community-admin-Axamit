var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var ngx_slick_carousel_1 = require('ngx-slick-carousel');
var ng2_file_upload_1 = require('ng2-file-upload');
var http_1 = require('@angular/http');
var http_2 = require('@angular/common/http');
var app_component_1 = require('./app.component');
var employees_component_1 = require('./employees/employees.component');
var employee_list_component_1 = require('./employees/employee-list/employee-list.component');
var employee_item_component_1 = require('./employees/employee-list/employee-item/employee-item.component');
var app_routing_module_1 = require('./app-routing.module');
var employee_service_1 = require('./shared/employee.service');
var meetup_service_1 = require('./shared/meetup.service');
var speaker_service_1 = require('./shared/speaker.service');
var auth_service_1 = require('./auth/auth.service');
var auth_guard_service_1 = require('./auth/auth-guard.service');
var data_storage_service_1 = require('./shared/data-storage.service');
var header_component_1 = require('./header/header.component');
var employee_detail_component_1 = require('./employees/employee-detail/employee-detail.component');
var employee_edit_component_1 = require('./employees/employee-edit/employee-edit.component');
var meetups_component_1 = require('./meetups/meetups.component');
var meetup_list_component_1 = require('./meetups/meetup-list/meetup-list.component');
var meetup_item_component_1 = require('./meetups/meetup-list/meetup-item/meetup-item.component');
var meetup_detail_component_1 = require('./meetups/meetup-detail/meetup-detail.component');
var speaker_item_component_1 = require('./meetups/meetup-detail/speaker-item/speaker-item.component');
var meetup_edit_component_1 = require('./meetups/meetup-edit/meetup-edit.component');
var modal_component_1 = require('./employees/employee-list/modal/modal.component');
var signin_component_1 = require('./auth/signin/signin.component');
var fileUpload_directive_1 = require('./employees/employee-edit/fileUpload.directive');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                employees_component_1.EmployeesComponent,
                employee_list_component_1.EmployeeListComponent,
                employee_item_component_1.EmployeeItemComponent,
                header_component_1.HeaderComponent,
                employee_detail_component_1.EmployeeDetailComponent,
                employee_edit_component_1.EmployeeEditComponent,
                meetups_component_1.MeetupsComponent,
                meetup_list_component_1.MeetupListComponent,
                meetup_item_component_1.MeetupItemComponent,
                meetup_detail_component_1.MeetupDetailComponent,
                speaker_item_component_1.SpeakerItemComponent,
                meetup_edit_component_1.MeetupEditComponent,
                modal_component_1.ModalComponent,
                ng2_file_upload_1.FileSelectDirective,
                fileUpload_directive_1.FileUploadDirective,
                signin_component_1.SigninComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.ReactiveFormsModule,
                ngx_slick_carousel_1.SlickCarouselModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_2.HttpClientModule
            ],
            providers: [employee_service_1.EmployeeService, speaker_service_1.SpeakerService, auth_service_1.AuthService, auth_guard_service_1.AuthGuardService, data_storage_service_1.DataStorageService, meetup_service_1.MeetupService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
})();
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map