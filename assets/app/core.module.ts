import {NgModule} from "@angular/core";
import {AuthService} from "./services/auth.service";
import {MessageService} from "./services/message.service";
import {ErrorService} from "./services/error.service";

@NgModule({
    providers: [AuthService, MessageService, ErrorService]
})

export class CoreModule {
}