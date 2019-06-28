import { Component, OnInit } from '@angular/core';

import { MeetupService } from "../shared/meetup.service";
import { SpeakerService } from "../shared/speaker.service";

@Component({
  selector: 'app-meetups',
  templateUrl: './meetups.component.html',
  styleUrls: ['./meetups.component.scss']
})
export class MeetupsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
