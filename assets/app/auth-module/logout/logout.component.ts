import {Component, EventEmitter, Input, Output} from '@angular/core'
import {Message} from "../../model/model";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {MessagesComponent} from "../../messages-module/messages/messages.component";
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
        this.authService.signOut();
        this.rtr.navigateByUrl('auth');

    }


}