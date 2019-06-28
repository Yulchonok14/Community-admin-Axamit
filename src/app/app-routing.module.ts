import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { MeetupsComponent } from './meetups/meetups.component';
import { MeetupDetailComponent } from './meetups/meetup-detail/meetup-detail.component';
import { MeetupEditComponent } from './meetups/meetup-edit/meetup-edit.component';
import { SigninComponent } from "./auth/signin/signin.component";
import { AuthGuardService } from './auth/auth-guard.service';
import { MeetupResolverService } from './meetups/meetup-resolver.service';
import { SpeakerResolverService } from './meetups/speaker-resolver.service';
import { EmployeeResolverService } from './employees/employee-resolver.service';

const appRoutes:Routes = [
    {path: '', redirectTo: '/signin', pathMatch: 'full'},
    {
        path: 'employees', component: EmployeesComponent, children: [
        {path: 'new', component: EmployeeEditComponent},
        {path: ':id', component: EmployeeDetailComponent, resolve: [EmployeeResolverService]},
        {path: ':id/edit', component: EmployeeEditComponent, resolve: [EmployeeResolverService]},
    ], canActivate: [AuthGuardService]
    },
    {
        path: 'meetups', component: MeetupsComponent, children: [
        {path: 'new', component: MeetupEditComponent},
        {path: ':id', component: MeetupDetailComponent, resolve: [MeetupResolverService, EmployeeResolverService, SpeakerResolverService]},
        {path: ':id/edit', component: MeetupEditComponent, resolve: [MeetupResolverService, EmployeeResolverService, SpeakerResolverService]}
    ], canActivate: [AuthGuardService]
    },
    {path: 'signin', component: SigninComponent}
];

@NgModule ({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}
