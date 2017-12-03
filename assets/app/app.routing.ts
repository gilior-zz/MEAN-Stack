import {RouterModule, Routes} from "@angular/router";

import {MessagesComponent} from "./messages/messages.component";
import {AuthComponent} from "./auth/auth.component";
import {SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";
import {LogoutComponent} from "./logout/logout.component";


const routes: Routes = [
    {path: 'messages', component: MessagesComponent},
    {
        path: 'auth', component: AuthComponent, children: [
        {path: 'signup', component: SignupComponent},
        {path: 'signin', component: SigninComponent},
        {path: 'logout', component: LogoutComponent}
    ]
    },
    {path: '', pathMatch: 'full', redirectTo: '/messages'}
]

export const Routing = RouterModule.forRoot(routes)

