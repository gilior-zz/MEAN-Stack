import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {User} from "../model/model";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {Router, Routes} from "@angular/router";
import {MessagesComponent} from "../messages-module/messages/messages.component";
import {AuthComponent} from "../auth-module/auth/auth.component";
import {SignupComponent} from "../auth-module/signup/signup.component";
import {SigninComponent} from "../auth-module/signin/signin.component";
import {LogoutComponent} from "../auth-module/logout/logout.component";
import {ErrorService} from "./error.service";

@Injectable()
export class AuthService {
    url: string = 'http://localhost:3000/usr'

    constructor(private   http: HttpClient, private rtr: Router, private  errorService: ErrorService) {
    }


    signOut() {
        localStorage.clear();
        // this.changeRoutes(routes);
    }

    get validUser() {
        return localStorage.getItem('id')
    }

    user: User;

    sginin(user: User) {
        return this.http.post(this.url + '/signin', user)
            .map(res => {
                console.log(res);
                // this.changeRoutes(routes);
                this.user = res.obj;
                return res;
            })
            .catch((err: HttpErrorResponse) => {


                this.errorService.openDialog(err.error.title, err.error.error.message)
                return Observable.throw(err)
            })
    }

    changeRoutes(routes: Routes) {
        this.rtr.resetConfig(routes);
    }

    signUp(user: User) {
        return this.http.post(this.url, user)
            .map(res => {
                console.log(res);
                const newUser = new User(user.email, user.pwd, user.firstName, user.lastName);
                return newUser;
            })
            .catch(err => {
                this.errorService.openDialog(err.error.title, err.error.error.message)
                return Observable.throw(err)
            })
    }
}