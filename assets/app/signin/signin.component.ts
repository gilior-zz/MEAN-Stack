import {Component, EventEmitter, Input, Output} from '@angular/core'
import {Message} from "../model/model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
    selector: 'signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css'],

})
export class SigninComponent {
    frm: FormGroup

    constructor(private  fb: FormBuilder) {
this.buildFrm();
    }

    onSubmit() {

    }

    private buildFrm() {
        this.frm = this.fb.group({

            email: ['', [Validators.required, Validators.pattern('^(([^<>()\\[\\]\\.,;:\\s@\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$')]],
            pwd: ['', Validators.required]


        })
    }

}