import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Meetup } from '../../../shared/meetup.model';

@Component({
  selector: 'app-meetup-item',
  templateUrl: './meetup-item.component.html',
  styleUrls: ['./meetup-item.component.scss']
})
export class MeetupItemComponent implements OnInit {

  @Input() meetupItem: Meetup;
  @Output() deleteMeetup: EventEmitter<any> = new EventEmitter();
  @Output() chosenMeetup: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onDeleteMeetup(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    this.deleteMeetup.emit();
  }

  onEditMeetup(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    this.router.navigate([this.meetupItem.id,'edit'], {relativeTo:this.route});
  }

}
