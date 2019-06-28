import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { Response } from '@angular/http';

import { Employee } from '../../shared/employee.model';
import { EmployeeService } from '../../shared/employee.service';
import { DataStorageService } from '../../shared/data-storage.service';

const UploadURL = 'http://localhost:4200/api/upload';

@Component({
    selector: 'app-employee-edit',
    templateUrl: './employee-edit.component.html',
    styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit  {
    item:Employee;
    id:string;
    editMode = false;
    employeeForm:FormGroup;
    pathToImages = '../../../assets/';
    fileName = '';
    url = '';
    uploader: FileUploader = new FileUploader({url: this.url, itemAlias: 'photo'});

    constructor(private router:Router,
                private route:ActivatedRoute,
                private employeeService:EmployeeService,
                private dataStorageService:DataStorageService) {
    }

    ngOnInit() {
        this.route.params.subscribe((params:Params) => {
            this.id = params['id'];
            this.editMode = this.id != null;
            this.initForm();
            this.employeeService.editModeEmployeeChanged.next(this.id);
        });

        this.uploader.onAfterAddingFile = (file) => {
            file.withCredentials = false;
            console.log('file: ', file);
            this.fileName = file.file.name;
        };
        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
            console.log('FileUpload:uploaded:', item, status, response);
            alert('File uploaded successfully');
        };
    }

    onSubmit() {
        let {id, name, imagePath, position} = this.employeeForm.value;
        const newEmployee = new Employee(id, name, imagePath, position);
        if (this.editMode) {
            newEmployee.id = this.id;
            this.employeeService.updateEmployee(newEmployee);
        } else {
            this.employeeService.addEmployee(newEmployee);
            this.uploader.uploadAll();
        }
        this.onCancel();
        this.dataStorageService.changeEmployees()
            .subscribe(
                (response: Response) => {
                    console.log(response);
                }
            )
    }

    onChooseFile(e: Event) {
        e.preventDefault();
        e.stopPropagation();
        let fileElement = document.getElementById('file-input');
        fileElement.click();
    }

    handleFileInput(file: File) {
        console.log('file: ', file);
        this.fileName = file.name;
    }

    onCancel() {
        this.router.navigate(['../'], {relativeTo: this.route});
    }

    private initForm() {
        let employeeName = '';
        let employeePosition = '';
        let employeeImagePath = '';

        if (this.editMode) {
            this.item = this.employeeService.getEmployeeById(this.id);
            employeeName = this.item.name;
            employeePosition = this.item.position;
            employeeImagePath = this.item.imageUrl;
        }
        this.employeeForm = new FormGroup({
            'name': new FormControl(employeeName, Validators.required),
            'position': new FormControl(employeePosition, Validators.required),
            'imagePath': new FormControl(employeeImagePath, Validators.required)
        })
    }

}
