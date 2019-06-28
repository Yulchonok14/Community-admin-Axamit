import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FileSelectDirective } from 'ng2-file-upload';
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeItemComponent } from './employees/employee-list/employee-item/employee-item.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeService } from './shared/employee.service';
import { MeetupService } from './shared/meetup.service';
import { SpeakerService } from './shared/speaker.service';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { DataStorageService } from './shared/data-storage.service';
import { HeaderComponent } from './header/header.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { MeetupsComponent } from './meetups/meetups.component';
import { MeetupListComponent } from './meetups/meetup-list/meetup-list.component';
import { MeetupItemComponent } from './meetups/meetup-list/meetup-item/meetup-item.component';
import { MeetupDetailComponent } from './meetups/meetup-detail/meetup-detail.component';
import { SpeakerItemComponent } from './meetups/meetup-detail/speaker-item/speaker-item.component';
import { MeetupEditComponent } from './meetups/meetup-edit/meetup-edit.component';
import { ModalComponent } from './employees/employee-list/modal/modal.component';
import { SigninComponent } from './auth/signin/signin.component';
import { FileUploadDirective } from './employees/employee-edit/fileUpload.directive';

@NgModule({
    declarations: [
        AppComponent,
        EmployeesComponent,
        EmployeeListComponent,
        EmployeeItemComponent,
        HeaderComponent,
        EmployeeDetailComponent,
        EmployeeEditComponent,
        MeetupsComponent,
        MeetupListComponent,
        MeetupItemComponent,
        MeetupDetailComponent,
        SpeakerItemComponent,
        MeetupEditComponent,
        ModalComponent,
        FileSelectDirective,
        FileUploadDirective,
        SigninComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        SlickCarouselModule,
        FormsModule,
        HttpModule,
        HttpClientModule
    ],
    providers: [EmployeeService, SpeakerService, AuthService, AuthGuardService, DataStorageService, MeetupService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
