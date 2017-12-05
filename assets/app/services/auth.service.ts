import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {User} from "../model/model";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {Router, Routes} from "@angular/router";
import {MessagesComponent} from "../messages/messages.component";
import {AuthComponent} from "../auth/auth.component";
import {SignupComponent} from "../signup/signup.component";
import {SigninComponent} from "../signin/signin.component";
import {LogoutComponent} from "../logout/logout.component";

@Injectable()
export class AuthService {
    url: string = 'http://localhost:3000/usr'

    constructor(private   http: HttpClient, private rtr: Router) {
    }


    signOut(routes: Routes) {
        localStorage.clear();
        this.changeRoutes(routes);
    }

    get validUser() {
        return localStorage.getItem('id')
    }

    user: User;

    sginin(user: User, routes: Routes) {
        return this.http.post(this.url + '/signin', user)
            .map(res => {
                console.log(res);
                this.changeRoutes(routes);
                this.user=res.obj;
                return res;
            })
            .catch(err => {
                console.log(err);
                Observable.throw(err)
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
                console.log(err);
                Observable.throw(err);
            })
    }
}