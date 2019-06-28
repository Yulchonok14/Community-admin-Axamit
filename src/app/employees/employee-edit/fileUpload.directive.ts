import { Directive, HostListener, forwardRef, OnChanges, SimpleChanges, Input } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

@Directive({
    selector: "[fileUpload]",
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FileUploadDirective), multi: true}
    ]
})
export class FileUploadDirective implements ControlValueAccessor, OnChanges {
    @Input() public input: any;

    constructor() {
        this.onChange = () => {};
        this.onTouched = () => {};
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes.input){
            this.onChange(String(changes.input));
            this.onTouched();
        }
    }

    onChange(val: void | string) {};

    onTouched() {};

    writeValue(value: string) {}

    registerOnChange(fn: any): void { this.onChange = fn; }
    registerOnTouched(fn: any): void { this.onTouched = fn; }
}
