import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';
import { EmployeeService } from './employee.service';
import { MeetupService } from './meetup.service';
import { SpeakerService } from './speaker.service';

import { Employee } from './employee.model';
import { Meetup } from './meetup.model';
import { Speaker } from './speaker.model';

@Injectable()
export class DataStorageService {

    constructor(private http: HttpClient,
                private authService: AuthService,
                private employeeService: EmployeeService,
                private meetupService: MeetupService,
                private speakerService: SpeakerService) {}

    changeMeetups() {
        //const token = this.authService.getToken();

        return this.http.put('https://community-affea.firebaseio.com/meetups.json',
            this.meetupService.getMeetupList());
    }

    getMeetups() {
        //const token = this.authService.getToken();

        return this.http.get<Meetup[]>('https://community-affea.firebaseio.com/meetups.json?')
            .pipe(tap(
                (meetups) => {
                    this.meetupService.setMeetups(meetups);
                }
            ));
    }

    getSpeakers() {
        return this.http.get<Speaker[]>('https://community-affea.firebaseio.com/speakers.json?')
            .pipe(tap(
                (speakers) => {
                    this.speakerService.setSpeakers(speakers);
                }
            ));
    }

    changeSpeakers() {
        //const token = this.authService.getToken();

        return this.http.put('https://community-affea.firebaseio.com/speakers.json',
            this.speakerService.getSpeakerList());

        /*return this.http.put('https://community-affea.firebaseio.com/speakers.json',
         this.speakerService.getSpeakerList());*/
    }

    changeEmployees() {
        //const token = this.authService.getToken();

        return this.http.put('https://community-affea.firebaseio.com/employees.json',
        this.employeeService.getEmployeeList());

        /*return this.http.put('https://community-affea.firebaseio.com/employees.json',
            this.employeeService.getEmployeeList());*/
    }

    getEmployees() {
        //const token = this.authService.getToken();

        return this.http.get<Employee[]>('https://community-affea.firebaseio.com/employees.json')
            .pipe(tap(
                (employees) => {
                    this.employeeService.setEmployees(employees);
                })
            );

        /*return this.http.get<Employee[]>('https://community-affea.firebaseio.com/employees.json')
            .subscribe(
                (employees) => {
                    this.employeeService.setEmployees(employees);
                }
            );*/
    }

}
