import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Response } from '@angular/http';

import { EmployeeService } from '../../shared/employee.service';
import { Employee } from '../../shared/employee.model';
import { Meetup } from '../../shared/meetup.model';
import { MeetupService } from '../../shared/meetup.service';
import { SpeakerService } from '../../shared/speaker.service';
import { Image } from "../../shared/image.model";
import { Speaker } from "../../shared/speaker.model";
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
    selector: 'app-meetup-edit',
    templateUrl: './meetup-edit.component.html',
    styleUrls: ['./meetup-edit.component.scss']
})
export class MeetupEditComponent implements OnInit {

    meetupForm:FormGroup;
    editMode:boolean = false;
    employeeArr:Employee[] = [];
    id:string;
    meetup:Meetup;
    pathToImages = '../../assets';

    constructor(private route:ActivatedRoute,
                private employeeService:EmployeeService,
                private meetupService:MeetupService,
                private speakerService:SpeakerService,
                private router:Router,
                private dataStorageService:DataStorageService) {
    }

    ngOnInit() {
        this.route.params.
        subscribe((params:Params) => {
            this.id = params['id'];
            this.editMode = this.id !== (null || undefined);
            this.initForm();
            this.employeeArr = this.employeeService.getEmployeeList();
        });
    }

    getImageUrl(speakerId: string) {
        return this.pathToImages + this.employeeService.getEmployeeById(speakerId).imageUrl;
    }

    generateId():string {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    onSubmit() {
        if(!this.id){
            this.id = this.generateId();
        }
        let {meetupName, meetupDate, meetupTime, meetupLocation, meetupAddress, meetupDescr} = this.meetupForm.value;
        let images:Image[] = [];
        let speakers:Speaker[] = [];

        if (this.meetupForm.value.meetupImages) {
            for (let image of this.meetupForm.value.meetupImages) {
                images.push(
                    new Image(
                        image.imageURL,
                        image.imageTitle
                    )
                );
            }
        }

        if (this.meetupForm.value.meetupSpeakers) {
            for (let speaker of this.meetupForm.value.meetupSpeakers) {
                speakers.push(
                    new Speaker(
                        this.id,
                        speaker.employeeId,
                        speaker.reportName,
                        speaker.reportHeadline,
                        speaker.fileURL,
                        speaker.videoURL
                    )
                )
            }
        }

        let newMeetup = new Meetup(
            this.id,
            meetupName,
            meetupLocation,
            meetupDate,
            meetupTime,
            meetupAddress,
            meetupDescr,
            images,
            []
        );

        if(this.editMode) {
            this.meetupService.updateMeetup(newMeetup);
            this.speakerService.updateSpeakers(this.id, speakers);
        } else {
            this.meetupService.addMeetup(newMeetup);
            this.speakerService.addSpeaker(speakers);
        }

        this.onCancel();
        this.dataStorageService.changeMeetups()
            .subscribe(
                (response: Response) => {
                    console.log(response);
                }
            );
        this.dataStorageService.changeSpeakers()
            .subscribe(
                (response: Response) => {
                    console.log(response);
                }
            )
    }

    onCancel() {
        this.router.navigate(['../'], {relativeTo: this.route});
    }

    getControls(fieldName:string) {
        return (<FormArray>this.meetupForm.get(fieldName)).controls;
    }

    initForm() {
        let meetupName = '';
        let meetupDate = '';
        let meetupTime = '';
        let meetupLocation = '';
        let meetupAddress = '';
        let meetupDescr = '';
        let meetupImages = new FormArray([]);
        let meetupSpeakers = new FormArray([]);

        if (this.editMode) {
            this.meetup = this.meetupService.getMeetupById(this.id);
            this.meetup.speakers = this.speakerService.getSpeakerListByMeetupId(this.id);
            meetupName = this.meetup.name;
            meetupDate = this.meetup.date;
            meetupTime = this.meetup.time;
            meetupLocation = this.meetup.shortLocation;
            meetupAddress = this.meetup.fullLocation;
            meetupDescr = this.meetup.description;
            if (this.meetup.images) {
                for (let image of this.meetup.images) {
                    meetupImages.push(
                        new FormGroup({
                            'imageURL': new FormControl(image.url, Validators.required),
                            'imageTitle': new FormControl(image.title, Validators.required)
                        })
                    )
                }
            }
            if (this.meetup.speakers) {
                for (let speaker of this.meetup.speakers) {
                    meetupSpeakers.push(
                        new FormGroup({
                            'employeeId': new FormControl(speaker.employeeId, Validators.required),
                            'reportName': new FormControl(speaker.nameReport, Validators.required),
                            'reportHeadline': new FormControl(speaker.headlineReport, Validators.required),
                            'fileURL': new FormControl(speaker.fileUrl),
                            'videoURL': new FormControl(speaker.videoUrl)
                        })
                    );
                }
            }
        }

        this.meetupForm = new FormGroup({
            meetupName: new FormControl(meetupName, Validators.required),
            meetupDate: new FormControl(meetupDate, Validators.required),
            meetupTime: new FormControl(meetupTime, Validators.required),
            meetupLocation: new FormControl(meetupLocation, Validators.required),
            meetupAddress: new FormControl(meetupAddress, Validators.required),
            meetupDescr: new FormControl(meetupDescr, Validators.required),
            meetupImages: meetupImages,
            meetupSpeakers: meetupSpeakers
        });
    }

    onAddImageURL() {
        (<FormArray>this.meetupForm.get('meetupImages')).push(
            new FormGroup({
                'imageURL': new FormControl('', Validators.required),
                'imageTitle': new FormControl('', Validators.required)
            })
        )
    }

    onAddSpeaker() {
        let employeeId = this.employeeArr[0].id;
        (<FormArray>this.meetupForm.get('meetupSpeakers')).push(
            new FormGroup({
                'employeeId': new FormControl(employeeId, Validators.required),
                'reportName': new FormControl('', Validators.required),
                'reportHeadline': new FormControl('', Validators.required),
                'fileURL': new FormControl(),
                'videoURL': new FormControl()
            })
        );
    }

    onDeleteSpeaker(index:number) {
        (<FormArray>this.meetupForm.get('meetupSpeakers')).removeAt(index);
    }

    onRemoveImage(index:number) {
        (<FormArray>this.meetupForm.get('meetupImages')).removeAt(index);
    }


}
