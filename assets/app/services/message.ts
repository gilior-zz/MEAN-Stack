import {Message} from "../model/model";

export class MessageService {
    messages: Message[]=[];

    addMessge(msg: Message): void {

        this.messages.push(msg)
        console.log(this.messages);
    }

    getMessage() {
        return this.messages;
    }

    deleteMessage(msg: Message) {
        this.messages.splice(this.messages.indexOf(msg), 1);
    }
}