import {Router, RouterModule, Routes} from "@angular/router";

import {MessagesComponent} from "./messages-module/messages/messages.component";
import {AuthComponent} from "./auth-module/auth/auth.component";
import {SignupComponent} from "./auth-module/signup/signup.component";
import {SigninComponent} from "./auth-module/signin/signin.component";
import {LogoutComponent} from "./auth-module/logout/logout.component";
import {NgModule} from "@angular/core";
import {AuthService} from "./services/auth.service";


let routes: Routes = [
    {path: 'messages', loadChildren: './messages-module/messages.module#MessagesModule'},
    {path: 'auth', loadChildren: './auth-module/auth.module#AuthModule'},
    {path: '', pathMatch: 'full', redirectTo: '/messages'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}




