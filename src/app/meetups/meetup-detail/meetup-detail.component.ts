import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import * as $ from 'jquery';
import { Subscription } from 'rxjs/Subscription';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

import { Meetup } from '../../shared/meetup.model';
import { Speaker } from '../../shared/speaker.model';
import { Employee } from '../../shared/employee.model';
import { MeetupService } from '../../shared/meetup.service';
import { SpeakerService } from '../../shared/speaker.service';
import { EmployeeService } from '../../shared/employee.service';

@Component({
    selector: 'app-meetup-detail',
    templateUrl: './meetup-detail.component.html',
    styleUrls: ['./meetup-detail.component.scss']
})
export class MeetupDetailComponent implements OnInit, OnDestroy {

    @ViewChild('slickModal')carousel: SlickCarouselComponent;
    meetupItem:Meetup;
    employeeArr:Employee[] = [];
    imagePath:string = '../../assets';
    meetupId: string;
    speakerChangeSubscription: Subscription;

    slideConfig = {
        "slidesToShow": 2,
        "slidesToScroll": 2,
        "infinite": false
    };

    constructor(private route:ActivatedRoute,
                private meetupService:MeetupService,
                private speakerService:SpeakerService,
                private employeeService:EmployeeService) {
    }

    ngOnInit() {
        let employeeIdArr = [];
        this.route.params.
            subscribe((param:Params) => {
                this.meetupId = param['id'];
                if (this.meetupItem) {
                    this.carousel.unslick();
                }
                this.meetupItem = this.meetupService.getMeetupById(this.meetupId);
                this.meetupItem.speakers = this.speakerService.getSpeakerListByMeetupId(this.meetupId);
                employeeIdArr = this.meetupItem.speakers.map((speaker:Speaker) => speaker.employeeId);
                this.employeeArr = this.employeeService.getEmployeeByIdArr(employeeIdArr);
            });

        this.speakerChangeSubscription = this.speakerService.speakerChanged.
            subscribe((speakerList: Speaker[]) =>
                this.meetupItem.speakers = speakerList
            )
    }

    ngOnDestroy() {
        this.speakerChangeSubscription.unsubscribe();
    }

}
