import {Component, EventEmitter, Input, Output} from '@angular/core'
import {Message} from "../model/model";
import {MessageService} from "../services/message";


@Component({
    selector: 'message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css'],

})
export class MessageComponent {
    @Input() message: Message;
    @Output() onEditClick = new EventEmitter<string>();
    @Output() onDeleteClick = new EventEmitter<string>();

    constructor(private  messageService:MessageService) {

    }

   public onEdit() {

        this.onEditClick.emit('new value');
    }

    onDelete() {
     this.messageService.deleteMessage(this.message);
    }
}