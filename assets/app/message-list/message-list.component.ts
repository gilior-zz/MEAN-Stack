import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {Message} from "../model/model";
import {MessageService} from "../services/message.service";

@Component({
    selector: 'message-list',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
    constructor(private  messageService: MessageService) {

    }

    messages: Message[];
    @Output() onEditClick:EventEmitter<Message>=new EventEmitter();

    ngOnInit(): void {
        this.messageService.getMessage().subscribe((msgs:Message[])=> {
            console.log(msgs)
            this.messages = msgs;
        });
    }


}