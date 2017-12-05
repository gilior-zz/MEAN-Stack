import {Component, EventEmitter, Input, Output} from '@angular/core'
import {Message, User} from "../model/model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";


@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],

})
export class SignupComponent {
    frm: FormGroup

    constructor(private  fb: FormBuilder, private  authService: AuthService) {
        this.buildFrm();
    }

    onSubmit() {
        let firstName = this.frm.get('firstName').value;
        let lastName = this.frm.get('lastName').value;
        let email = this.frm.value.email;
        let pwd = this.frm.get('pwd').value;
        const user = new User(email, pwd, firstName, lastName)
        this.authService.signUp(user).subscribe(
            data => {
            },
            err => {
            }
        );

        this.buildFrm();
        this.frm.reset();
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