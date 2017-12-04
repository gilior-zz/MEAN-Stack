import {Message} from "../model/model";

import 'rxjs/Rx';

import {HttpClient} from "@angular/common/http";
import {EventEmitter, Injectable, Output} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MessageService {
    url: string = 'http://localhost:3000/';

    constructor(private  http: HttpClient) {

    }

    messages: Message[] = [];

    addMessge(msg: Message): Observable<any> {

        return this.http.post('http://localhost:3000/msgs', msg)
            .map((res) => {
                    console.log(res)
                    const newMsg = res.obj;
                    const localMsg = new Message(newMsg.content, 'dummy', newMsg._id, null);
                    this.messages.push(localMsg)
                    return localMsg;
                }
            )
            .catch(err => console.log(err))
    }

    @Output() msgToEdit: EventEmitter<Message> = new EventEmitter<Message>();

    editMsg(msg: Message) {
        this.msgToEdit.emit(msg);
    }

    updateMsg(msg: Message): Observable<any> {
        return this.http.patch(this.url + 'msgs/' + msg.id, msg).map(i => {
            console.log(i);
            return i;
        })
    }

    getMessage(): Observable<any> {
        return this.http.get('http://localhost:3000/msgs')
            .map((v) => {
                    console.log(v);
                    let msgs: Message[] = [];
                    for (let msg of v.obj) {
                        let newMsg: Message = new Message(msg.content, 'LG', msg._id, 'dummy')
                        msgs.push(newMsg);
                    }
                    this.messages = msgs;
                    return msgs;
                }
            )
            .catch(err => console.log(err))
    }

    deleteMessage(msg: Message): Observable<any> {
        this.messages.splice(this.messages.indexOf(msg), 1);
        return this.http.delete(this.url + 'msgs/' + msg.id).map(i => {
            console.log(i);
            return i;
        })
    }
}