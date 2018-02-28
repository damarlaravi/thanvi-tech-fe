import { AbstractControl } from '@angular/forms';

export function quantityValidator(formControl: AbstractControl) {
    const quantity = formControl.value;
    console.log('Quantity is::   ', quantity);
}
