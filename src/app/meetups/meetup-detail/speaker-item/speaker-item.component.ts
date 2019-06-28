import { Component, OnInit, Input } from '@angular/core';

import { Speaker } from '../../../shared/speaker.model';
import { Employee } from '../../../shared/employee.model';

@Component({
  selector: 'app-speaker-item',
  templateUrl: './speaker-item.component.html',
  styleUrls: ['./speaker-item.component.scss']
})
export class SpeakerItemComponent implements OnInit {
  @Input() speakerItem: Speaker;
  @Input() employeeItem: Employee;

  constructor() { }

  ngOnInit() {
  }

}
