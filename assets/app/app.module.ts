import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {FormsModule} from "@angular/forms";
import {MessageComponent} from "./message/message.component";
import {MessageListComponent} from "./message-list/message-list.component";
import {MessageInputComponent} from "./message-input/message-input.component";
import {MessageService} from "./services/message";
import {MessagesComponent} from "./messages/messages.component";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent
    ],
    providers:[MessageService],
    imports: [BrowserModule,FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}