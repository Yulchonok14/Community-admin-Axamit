import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { DataStorageService } from '../shared/data-storage.service';
import { MeetupService } from '../shared/meetup.service';
import { Meetup } from '../shared/meetup.model';

@Injectable({providedIn: 'root'})
export class MeetupResolverService implements Resolve<Meetup[]>{
    constructor(private dataStorageService: DataStorageService, private meetupService: MeetupService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const meetups = this.meetupService.getMeetupList();
        if(meetups.length == 0){
            return this.dataStorageService.getMeetups();
        } else {
            return meetups;
        }
    }
}
