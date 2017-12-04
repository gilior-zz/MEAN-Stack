import {Component, Input, OnInit} from "@angular/core";
import {MessageService} from "../services/message.service";
import {Message} from "../model/model";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'message-input',
    templateUrl: './message-input.component.html',
    styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {

    constructor(private  messageService: MessageService) {

    }

    ngOnInit(): void {
        this.messageService.msgToEdit.subscribe(i => this._message = i)
    }

    _message: Message;
    // @Input()
    // set message(val) {
    //     if (!val)
    //         this._message = new Message('', '');
    //     else
    //         this._message = val;
    // }

    constructor(private messageService: MessageService) {

    }

    onSubmit(frm: NgForm) {
        let userName = 'New LG';
        let id = 'new dummy';
        let userId = 'new user id dummy';
        if (this._message) {
            this._message.content = frm.value.content;
            this.messageService.updateMsg(this._message).subscribe(() => {
                this._message = null;

            });

        }
        else {
            const msg = new Message(frm.value.content, 'LG', 'dummy', 'dummy');
            this.messageService.addMessge(msg).subscribe(
                i => frm.resetForm()
            )
            ;
        }


    }

}