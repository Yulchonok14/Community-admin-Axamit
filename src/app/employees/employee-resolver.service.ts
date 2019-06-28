import {Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';
import { DataStorageService } from '../shared/data-storage.service';

@Injectable({providedIn: 'root'})
export class EmployeeResolverService implements Resolve<Employee[]>{
    constructor(private employeeService: EmployeeService, private dataStorageService: DataStorageService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const employees = this.employeeService.getEmployeeList();
        if(employees.length == 0) {
            return this.dataStorageService.getEmployees();
        } else {
            return employees;
        }
    }
}
