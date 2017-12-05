import {Component, OnInit} from "@angular/core";
import {Message} from "../../model/model";
import {MessageService} from "../../services/message.service";

@Component({
    selector: 'messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
    constructor(private  messageService: MessageService) {

    }

    messages: Message[];

    ngOnInit(): void {
           }


}