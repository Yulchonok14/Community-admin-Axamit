var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var meetup_model_1 = require('../../shared/meetup.model');
var image_model_1 = require("../../shared/image.model");
var speaker_model_1 = require("../../shared/speaker.model");
var MeetupEditComponent = (function () {
    function MeetupEditComponent(route, employeeService, meetupService, speakerService, router, dataStorageService) {
        this.route = route;
        this.employeeService = employeeService;
        this.meetupService = meetupService;
        this.speakerService = speakerService;
        this.router = router;
        this.dataStorageService = dataStorageService;
        this.editMode = false;
        this.employeeArr = [];
        this.pathToImages = '../../assets';
    }
    MeetupEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.
            subscribe(function (params) {
            _this.id = params['id'];
            _this.editMode = _this.id !== (null || undefined);
            _this.initForm();
            _this.employeeArr = _this.employeeService.getEmployeeList();
        });
    };
    MeetupEditComponent.prototype.getImageUrl = function (speakerId) {
        return this.pathToImages + this.employeeService.getEmployeeById(speakerId).imageUrl;
    };
    MeetupEditComponent.prototype.generateId = function () {
        return '_' + Math.random().toString(36).substr(2, 9);
    };
    MeetupEditComponent.prototype.onSubmit = function () {
        if (!this.id) {
            this.id = this.generateId();
        }
        var _a = this.meetupForm.value, meetupName = _a.meetupName, meetupDate = _a.meetupDate, meetupTime = _a.meetupTime, meetupLocation = _a.meetupLocation, meetupAddress = _a.meetupAddress, meetupDescr = _a.meetupDescr;
        var images = [];
        var speakers = [];
        if (this.meetupForm.value.meetupImages) {
            for (var _i = 0, _b = this.meetupForm.value.meetupImages; _i < _b.length; _i++) {
                var image = _b[_i];
                images.push(new image_model_1.Image(image.imageURL, image.imageTitle));
            }
        }
        if (this.meetupForm.value.meetupSpeakers) {
            for (var _c = 0, _d = this.meetupForm.value.meetupSpeakers; _c < _d.length; _c++) {
                var speaker = _d[_c];
                speakers.push(new speaker_model_1.Speaker(this.id, speaker.employeeId, speaker.reportName, speaker.reportHeadline, speaker.fileURL, speaker.videoURL));
            }
        }
        var newMeetup = new meetup_model_1.Meetup(this.id, meetupName, meetupLocation, meetupDate, meetupTime, meetupAddress, meetupDescr, images, []);
        if (this.editMode) {
            this.meetupService.updateMeetup(newMeetup);
            this.speakerService.updateSpeakers(this.id, speakers);
        }
        else {
            this.meetupService.addMeetup(newMeetup);
            this.speakerService.addSpeaker(speakers);
        }
        this.onCancel();
        this.dataStorageService.changeMeetups()
            .subscribe(function (response) {
            console.log(response);
        });
        this.dataStorageService.changeSpeakers()
            .subscribe(function (response) {
            console.log(response);
        });
    };
    MeetupEditComponent.prototype.onCancel = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    MeetupEditComponent.prototype.getControls = function (fieldName) {
        return this.meetupForm.get(fieldName).controls;
    };
    MeetupEditComponent.prototype.initForm = function () {
        var meetupName = '';
        var meetupDate = '';
        var meetupTime = '';
        var meetupLocation = '';
        var meetupAddress = '';
        var meetupDescr = '';
        var meetupImages = new forms_1.FormArray([]);
        var meetupSpeakers = new forms_1.FormArray([]);
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
                for (var _i = 0, _a = this.meetup.images; _i < _a.length; _i++) {
                    var image = _a[_i];
                    meetupImages.push(new forms_1.FormGroup({
                        'imageURL': new forms_1.FormControl(image.url, forms_1.Validators.required),
                        'imageTitle': new forms_1.FormControl(image.title, forms_1.Validators.required)
                    }));
                }
            }
            if (this.meetup.speakers) {
                for (var _b = 0, _c = this.meetup.speakers; _b < _c.length; _b++) {
                    var speaker = _c[_b];
                    meetupSpeakers.push(new forms_1.FormGroup({
                        'employeeId': new forms_1.FormControl(speaker.employeeId, forms_1.Validators.required),
                        'reportName': new forms_1.FormControl(speaker.nameReport, forms_1.Validators.required),
                        'reportHeadline': new forms_1.FormControl(speaker.headlineReport, forms_1.Validators.required),
                        'fileURL': new forms_1.FormControl(speaker.fileUrl),
                        'videoURL': new forms_1.FormControl(speaker.videoUrl)
                    }));
                }
            }
        }
        this.meetupForm = new forms_1.FormGroup({
            meetupName: new forms_1.FormControl(meetupName, forms_1.Validators.required),
            meetupDate: new forms_1.FormControl(meetupDate, forms_1.Validators.required),
            meetupTime: new forms_1.FormControl(meetupTime, forms_1.Validators.required),
            meetupLocation: new forms_1.FormControl(meetupLocation, forms_1.Validators.required),
            meetupAddress: new forms_1.FormControl(meetupAddress, forms_1.Validators.required),
            meetupDescr: new forms_1.FormControl(meetupDescr, forms_1.Validators.required),
            meetupImages: meetupImages,
            meetupSpeakers: meetupSpeakers
        });
    };
    MeetupEditComponent.prototype.onAddImageURL = function () {
        this.meetupForm.get('meetupImages').push(new forms_1.FormGroup({
            'imageURL': new forms_1.FormControl('', forms_1.Validators.required),
            'imageTitle': new forms_1.FormControl('', forms_1.Validators.required)
        }));
    };
    MeetupEditComponent.prototype.onAddSpeaker = function () {
        var employeeId = this.employeeArr[0].id;
        this.meetupForm.get('meetupSpeakers').push(new forms_1.FormGroup({
            'employeeId': new forms_1.FormControl(employeeId, forms_1.Validators.required),
            'reportName': new forms_1.FormControl('', forms_1.Validators.required),
            'reportHeadline': new forms_1.FormControl('', forms_1.Validators.required),
            'fileURL': new forms_1.FormControl(),
            'videoURL': new forms_1.FormControl()
        }));
    };
    MeetupEditComponent.prototype.onDeleteSpeaker = function (index) {
        this.meetupForm.get('meetupSpeakers').removeAt(index);
    };
    MeetupEditComponent.prototype.onRemoveImage = function (index) {
        this.meetupForm.get('meetupImages').removeAt(index);
    };
    MeetupEditComponent = __decorate([
        core_1.Component({
            selector: 'app-meetup-edit',
            templateUrl: './meetup-edit.component.html',
            styleUrls: ['./meetup-edit.component.scss']
        })
    ], MeetupEditComponent);
    return MeetupEditComponent;
})();
exports.MeetupEditComponent = MeetupEditComponent;
//# sourceMappingURL=meetup-edit.component.js.map