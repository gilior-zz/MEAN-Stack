import {Component, EventEmitter, Input, Output} from '@angular/core'
import {Message} from "../model/model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],

})
export class SignupComponent {
    frm: FormGroup

    constructor(private  fb: FormBuilder) {
        this.buildFrm();
    }

    onSubmit() {

    }

    private buildFrm() {
        this.frm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern('^(([^<>()\\[\\]\\.,;:\\s@\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$')]],
            pwd: ['', Validators.required]


        })
    }

}