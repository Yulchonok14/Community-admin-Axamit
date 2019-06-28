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
var ng2_file_upload_1 = require('ng2-file-upload/ng2-file-upload');
var employee_model_1 = require('../../shared/employee.model');
var UploadURL = 'http://localhost:4200/api/upload';
var EmployeeEditComponent = (function () {
    function EmployeeEditComponent(router, route, employeeService, dataStorageService) {
        this.router = router;
        this.route = route;
        this.employeeService = employeeService;
        this.dataStorageService = dataStorageService;
        this.editMode = false;
        this.pathToImages = '../../../assets/';
        this.fileName = '';
        this.url = '';
        this.uploader = new ng2_file_upload_1.FileUploader({ url: this.url, itemAlias: 'photo' });
    }
    EmployeeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.editMode = _this.id != null;
            _this.initForm();
            _this.employeeService.editModeEmployeeChanged.next(_this.id);
        });
        this.uploader.onAfterAddingFile = function (file) {
            file.withCredentials = false;
            console.log('file: ', file);
            _this.fileName = file.file.name;
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log('FileUpload:uploaded:', item, status, response);
            alert('File uploaded successfully');
        };
    };
    EmployeeEditComponent.prototype.onSubmit = function () {
        var _a = this.employeeForm.value, id = _a.id, name = _a.name, imagePath = _a.imagePath, position = _a.position;
        var newEmployee = new employee_model_1.Employee(id, name, imagePath, position);
        if (this.editMode) {
            newEmployee.id = this.id;
            this.employeeService.updateEmployee(newEmployee);
        }
        else {
            this.employeeService.addEmployee(newEmployee);
            this.uploader.uploadAll();
        }
        this.onCancel();
        this.dataStorageService.changeEmployees()
            .subscribe(function (response) {
            console.log(response);
        });
    };
    EmployeeEditComponent.prototype.onChooseFile = function (e) {
        e.preventDefault();
        e.stopPropagation();
        var fileElement = document.getElementById('file-input');
        fileElement.click();
    };
    EmployeeEditComponent.prototype.handleFileInput = function (file) {
        console.log('file: ', file);
        this.fileName = file.name;
    };
    EmployeeEditComponent.prototype.onCancel = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    EmployeeEditComponent.prototype.initForm = function () {
        var employeeName = '';
        var employeePosition = '';
        var employeeImagePath = '';
        if (this.editMode) {
            this.item = this.employeeService.getEmployeeById(this.id);
            employeeName = this.item.name;
            employeePosition = this.item.position;
            employeeImagePath = this.item.imageUrl;
        }
        this.employeeForm = new forms_1.FormGroup({
            'name': new forms_1.FormControl(employeeName, forms_1.Validators.required),
            'position': new forms_1.FormControl(employeePosition, forms_1.Validators.required),
            'imagePath': new forms_1.FormControl(employeeImagePath, forms_1.Validators.required)
        });
    };
    EmployeeEditComponent = __decorate([
        core_1.Component({
            selector: 'app-employee-edit',
            templateUrl: './employee-edit.component.html',
            styleUrls: ['./employee-edit.component.scss']
        })
    ], EmployeeEditComponent);
    return EmployeeEditComponent;
})();
exports.EmployeeEditComponent = EmployeeEditComponent;
//# sourceMappingURL=employee-edit.component.js.map