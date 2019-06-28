import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $:any;

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
    @Input() title: string;
    @Input() description: string;
    @Input() actionButton: string;
    @Output() disactivateEmployee: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    onActivateModalForm(){
        $('#modalForm').modal('show');
    }

    onDisactivateEmployee() {
        this.disactivateEmployee.emit();
        $('#modalForm').modal('hide');
    }

}
