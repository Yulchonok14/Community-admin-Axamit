import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Employee } from '../../../shared/employee.model';
import { SpeakerService } from '../../../shared/speaker.service';
import { EmployeeService } from '../../../shared/employee.service';
import { DataStorageService } from '../../../shared/data-storage.service';

@Component({
    selector: 'app-employee-item',
    templateUrl: './employee-item.component.html',
    styleUrls: ['./employee-item.component.scss']
})
export class EmployeeItemComponent implements OnInit {

    @Input() employeeItem:Employee;
    @Output() activateEmployee:EventEmitter<any> = new EventEmitter();
    @Output() showModalForm:EventEmitter<Employee> = new EventEmitter();

    pathToImages = '../../../assets/';

    constructor(private router:Router,
                private route:ActivatedRoute,
                private speakerService:SpeakerService,
                private employeeService:EmployeeService,
                private dataStorageService:DataStorageService) {
    }

    ngOnInit() {
    }

    onEditEmployee(e:Event) {
        e.preventDefault();
        e.stopPropagation();
        this.router.navigate([this.employeeItem.id + '/edit'], {relativeTo: this.route});
    }

    onActivateEmployee(e:Event) {
        this.employeeItem.active = !this.employeeItem.active;
        e.stopPropagation();
        e.preventDefault();
        this.activateEmployee.emit();
    }

    onDeleteEmployee(e:Event, employeeId:string) {
        e.stopPropagation();
        e.preventDefault();
        if (this.speakerService.isEmployeeSpeaker(employeeId)) {
            this.showModalForm.emit(this.employeeItem);
        } else {
            this.employeeService.deleteEmployee(employeeId);
            this.dataStorageService.changeEmployees()
                .subscribe(
                    (response: Response) => {
                        console.log(response);
                    }
                )
        }
    }

}
