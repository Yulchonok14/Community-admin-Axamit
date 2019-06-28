import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Response } from '@angular/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { Meetup } from '../../shared/meetup.model';
import { MeetupService } from '../../shared/meetup.service';

@Component({
    selector: 'app-meetup-list',
    templateUrl: './meetup-list.component.html',
    styleUrls: ['./meetup-list.component.scss']
})
export class MeetupListComponent implements OnInit, OnDestroy {

    meetupList:Meetup[];
    chosenMeetup:string;
    meetupChangeSubscription: Subscription;

    constructor(private meetupService:MeetupService,
                private router:Router,
                private route:ActivatedRoute,
                private dataStorageService:DataStorageService) {
    }

    ngOnInit() {
        //this.meetupList = this.meetupService.getMeetupList();
        this.dataStorageService.getMeetups().subscribe();
        this.dataStorageService.getSpeakers().subscribe();
        this.dataStorageService.getEmployees().subscribe();

        this.meetupChangeSubscription = this.meetupService.meetupChanged
            .subscribe((meetupList:Meetup[]) => this.meetupList = meetupList);
    }

    onNewMeetup() {
        this.router.navigate(['new'], {relativeTo: this.route});
    }

    onDeleteMeetup(id:string) {
        this.meetupService.deleteMeetupById(id);
        id === this.chosenMeetup && this.router.navigate(['/meetups']);

        this.dataStorageService.changeMeetups()
            .subscribe(
                (response: Response) => {
                    console.log(response);
                }
            )
    }

    ngOnDestroy() {
        this.meetupChangeSubscription.unsubscribe();
    }

}
