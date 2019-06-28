import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Employee } from '../../shared/employee.model';
import { EmployeeService } from '../../shared/employee.service'

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  employeeItem: Employee;
  pathToImages = '../../../assets/';

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService){ }

  ngOnInit() {

    this.route.params
        .subscribe((params: Params) => {
          this.employeeItem = this.employeeService.getEmployeeById(params['id']);
        });
  }

}
