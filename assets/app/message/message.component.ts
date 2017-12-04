import {Component, EventEmitter, Input, Output} from '@angular/core'
import {Message} from "../model/model";
import {MessageService} from "../services/message.service";


@Component({
    selector: 'message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css'],

})
export class MessageComponent {
    @Input() message: Message;
    @Output() onEditClick = new EventEmitter<Message>();
    @Output() onDeleteClick = new EventEmitter<string>();

    constructor(public  messageService:MessageService) {

    }

   public onEdit() {
        this.onEditClick.emit(this.message);
    }

    onDelete() {
     this.messageService.deleteMessage(this.message).subscribe();
    }
}