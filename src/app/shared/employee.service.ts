import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Employee } from '../shared/employee.model';

@Injectable()
export class EmployeeService {
    employeeChanged = new Subject<Employee[]>();
    editModeEmployeeChanged = new Subject<string>();

    private employeeList:Employee[] = [
        /*new Employee(
            '1',
            'Никита Митрошин',
            '/images/avatars/mikita.jpg',
            'Certified AEM Developer в Axamit',
            true
        ),
        new Employee(
            '2',
            'Даниил Шейдак',
            '/images/avatars/daniil.jpg',
            'Certified AEM Developer в Epam',
            true
        )*/
    ];

    constructor() {
    }

    getEmployeeList() {
        return this.employeeList.slice();
    }

    getEmployeeById(id:string) {
        return this.employeeList.slice().filter((employee:Employee) => employee.id === id)[0];
    }

    getEmployeeByIdArr(idArr:string[]) {
        return this.employeeList.slice().filter((employee:Employee) => idArr.includes(employee.id));
    }

    addEmployee(newEmployee:Employee) {
        newEmployee.id = '_' + Math.random().toString(36).substr(2, 9);
        this.employeeList.push(newEmployee);
        this.employeeChanged.next(this.employeeList.slice());
    }

    updateEmployee(updatedEmployee:Employee) {
        const index = this.employeeList.map((employee:Employee) => employee.id).indexOf(updatedEmployee.id);
        this.employeeList[index] = updatedEmployee;
        this.employeeChanged.next(this.employeeList.slice());
    }

    deleteEmployee(employeeId: string) {
        const index = this.employeeList.map((employee: Employee) => employee.id).indexOf(employeeId);
        this.employeeList.splice(index, 1);
        this.employeeChanged.next(this.employeeList.slice());
    }

    changeActiveStatus(employee: Employee, isActive: boolean){
        const index = this.employeeList.indexOf(employee);
        this.employeeList[index].active = isActive;
        this.employeeChanged.next(this.employeeList.slice());
    }

    setEmployees(employees: Employee[]) {
        this.employeeList = employees;
        this.employeeChanged.next(this.employeeList.slice());
    }
}
