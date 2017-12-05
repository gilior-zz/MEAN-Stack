import {Router, RouterModule, Routes} from "@angular/router";

import {MessagesComponent} from "./messages/messages.component";
import {AuthComponent} from "./auth/auth.component";
import {SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";
import {LogoutComponent} from "./logout/logout.component";
import {NgModule} from "@angular/core";
import {AuthService} from "./services/auth.service";


let routes: Routes = [
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
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{
    constructor(private  rtr:Router,private  authService:AuthService){
        if (this.authService.validUser){
            routes: Routes = [
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
            ]
        }
        else{
            routes: Routes = [
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
            ]
        }

        this.rtr.resetConfig(routes);
    }
}
export const Routing = RouterModule.forRoot(routes)

