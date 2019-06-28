import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ModalComponent } from './modal/modal.component';

import { EmployeeService } from '../../shared/employee.service';
import { Employee } from '../../shared/employee.model';

import { DataStorageService } from '../../shared/data-storage.service';

@Component({
    selector: 'app-employees-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, OnDestroy {
    employeeList:Employee[];
    editModeEmployeeId:string;
    employeeChangeSubscription:Subscription;
    employeeEditModeSubscription:Subscription;
    title = "Failure employee deletion";
    description = "Employee can not be deleted. They are a speaker in the meetup(s).";
    actionButton = "Disactivate";

    @ViewChild(ModalComponent)
    private formModal: ModalComponent;
    private employee: Employee;


    constructor(private employeeService:EmployeeService,
                private router:Router,
                private route:ActivatedRoute,
                private dataStorageService:DataStorageService) {
    }

    ngOnInit() {
        //this.employeeList = this.employeeService.getEmployeeList();
        this.dataStorageService.getEmployees().subscribe();

        this.employeeChangeSubscription = this.employeeService.employeeChanged.
        subscribe((employeeList:Employee[]) => {
            this.employeeList = employeeList;
        });

        this.employeeEditModeSubscription = this.employeeService.editModeEmployeeChanged.
        subscribe((employeeId:string) => {
            this.editModeEmployeeId = employeeId;
        });
    }

    onNewEmployee() {
        this.router.navigate(['new'], {relativeTo: this.route});
    }

    onActivateEmployee(id:string) {
        id === this.editModeEmployeeId && this.router.navigate(['/employees/', id]);
    }

    onShowModalForm(employee: Employee) {
        this.employee = employee;
        this.formModal.onActivateModalForm();
    }

    onDisactivateEmployee() {
        this.employeeService.changeActiveStatus(this.employee, false);
    }

    ngOnDestroy() {
        this.employeeChangeSubscription.unsubscribe();
        this.employeeEditModeSubscription.unsubscribe();
    }

}
