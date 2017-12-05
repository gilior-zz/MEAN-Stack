import {NgModule} from "@angular/core";
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import {LogoutComponent} from "./logout/logout.component";
import {AuthComponent} from "./auth/auth.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared.module";

@NgModule({
    imports: [AuthRoutingModule, CommonModule, SharedModule],
    declarations: [
        SigninComponent,
        SignupComponent,
        LogoutComponent,
        AuthComponent,
    ]
})

export class AuthModule {
}