import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from "./auth/auth.component";
import {SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";
import {LogoutComponent} from "./logout/logout.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
    {
        path: '', component: AuthComponent, children: [
        {path: 'signup', component: SignupComponent},
        {path: 'signin', component: SigninComponent},
        {path: 'logout', component: LogoutComponent},
        {path: '', pathMatch: 'full', redirectTo: 'signin'}
    ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRoutingModule {

}