import {Component, EventEmitter, Input, Output} from '@angular/core'
import {Message} from "../model/model";


@Component({
    selector: 'message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css'],

})
export class MessageComponent {
    @Input() message: Message;
    @Output() onEditClick = new EventEmitter<string>();

    constructor() {

    }

   public onEdit() {

        this.onEditClick.emit('new value');
    }
}