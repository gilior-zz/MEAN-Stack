import {Component, EventEmitter, Input, Output} from '@angular/core'
import {Message} from "../model/model";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {MessagesComponent} from "../messages/messages.component";
import {AuthComponent} from "../auth/auth.component";
import {SignupComponent} from "../signup/signup.component";
import {SigninComponent} from "../signin/signin.component";


@Component({
    selector: 'logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css'],

})
export class LogoutComponent {


    constructor(private  authService: AuthService, private rtr: Router) {

    }

    onClick() {
        this.authService.signOut([
            {path: 'messages', component: MessagesComponent},
            {
                path: 'auth', component: AuthComponent, children: [
                {path: 'signup', component: SignupComponent},
                {path: 'signin', component: SigninComponent},
                {path: 'logout', component: LogoutComponent},
                {path: '', pathMatch: 'full', redirectTo: 'signin'}
            ]
            },
            {path: '', pathMatch: 'full', redirectTo: '/messages'}
        ]);
        this.rtr.navigateByUrl('auth');

    }


}