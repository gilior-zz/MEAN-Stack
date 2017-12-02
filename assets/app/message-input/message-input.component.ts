import {Component} from "@angular/core";
import {MessageService} from "../services/message";
import {Message} from "../model/model";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'message-input',
    templateUrl: './message-input.component.html',
    styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent {
    constructor(private messageService:MessageService){

    }
    onSubmit(frm:NgForm){

        const msg=new Message(frm.value.content,'LG');
        this.messageService.addMessge(msg);
        frm.resetForm();
    }

}