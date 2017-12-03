import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MessageComponent} from "./message/message.component";
import {MessageListComponent} from "./message-list/message-list.component";
import {MessageInputComponent} from "./message-input/message-input.component";
import {MessageService} from "./services/message";
import {MessagesComponent} from "./messages/messages.component";
import {AuthComponent} from "./auth/auth.component";
import {HeaderComponent} from "./header/header.component";
import {Routing} from "./app.routing";
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import {LogoutComponent} from "./logout/logout.component";


@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthComponent,
        HeaderComponent,
        SigninComponent,
        SignupComponent,
        LogoutComponent

    ],
    providers: [MessageService],
    imports: [BrowserModule, FormsModule, Routing, ReactiveFormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}