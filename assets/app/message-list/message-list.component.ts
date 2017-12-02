import {Component, OnInit} from "@angular/core";
import {Message} from "../model/model";
import {MessageService} from "../services/message";

@Component({
    selector: 'message-list',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
    constructor(private  messageService: MessageService) {

    }

    messages: Message[];

    ngOnInit(): void {
        this.messages = this.messageService.getMessage();
    }


}