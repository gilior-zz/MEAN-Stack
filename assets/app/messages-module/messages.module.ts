import {NgModule} from "@angular/core";
import {MessagesRoutingModule} from "./messages-routing.module";
import {CommonModule} from "@angular/common";
import {MessagesComponent} from "./messages/messages.component";
import {MessageInputComponent} from "./message-input/message-input.component";
import {MessageListComponent} from "./message-list/message-list.component";
import {SharedModule} from "../shared.module";
import {MessageComponent} from "./message/message.component";

@NgModule({
    declarations: [MessagesComponent, MessageInputComponent, MessageListComponent, MessageComponent],
    imports: [MessagesRoutingModule, CommonModule,SharedModule]
})

export class MessagesModule {

}