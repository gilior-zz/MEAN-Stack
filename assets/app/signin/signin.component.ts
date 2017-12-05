import {Component, EventEmitter, Input, Output} from '@angular/core'
import {Message, User} from "../model/model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {MessagesComponent} from "../messages/messages.component";
import {AuthComponent} from "../auth/auth.component";
import {SignupComponent} from "../signup/signup.component";
import {LogoutComponent} from "../logout/logout.component";


@Component({
    selector: 'signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css'],

})
export class SigninComponent {
    frm: FormGroup

    constructor(private  fb: FormBuilder, private  authService: AuthService, private  rtr: Router) {
        this.buildFrm();
    }

    onSubmit() {
        const user = new User(this.frm.value.email, this.frm.value.pwd);
        this.authService.sginin(user, [
            {path: 'messages', component: MessagesComponent},
            {
                path: 'auth', component: AuthComponent, children: [
                {path: 'signup', component: SignupComponent},
                {path: 'signin', component: SigninComponent},
                {path: 'logout', component: LogoutComponent},
                {path: '', pathMatch: 'full', redirectTo: 'logout'}
            ]
            },
            {path: '', pathMatch: 'full', redirectTo: '/messages'}
        ]).subscribe(
            res => {
                const tkn = res.tkn;
                const id = res.obj._id;
                localStorage.setItem('tkn', tkn);
                localStorage.setItem('id', id);
                this.frm.reset();
                this.rtr.navigateByUrl('/')
            },
            err => {
            }
        )
    }

    private buildFrm() {
        this.frm = this.fb.group({

            email: ['', [Validators.required, Validators.pattern('^(([^<>()\\[\\]\\.,;:\\s@\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$')]],
            pwd: ['', Validators.required]


        })
    }

}