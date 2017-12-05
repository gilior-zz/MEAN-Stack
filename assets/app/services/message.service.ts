import {Message} from "../model/model";

import 'rxjs/Rx';

import {HttpClient, HttpParams} from "@angular/common/http";
import {EventEmitter, Injectable, Output} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {QueryParamsHandling} from "@angular/router/src/config";
import {ErrorService} from "./error.service";

@Injectable()
export class MessageService {
    url: string = 'http://localhost:3000/msgs/';

    constructor(private  http: HttpClient, private errorService: ErrorService) {

    }

    messages: Message[] = [];

    get tkn(): HttpParams {
        return new HttpParams().set('tkn', localStorage.getItem('tkn') || '');
    }

    addMessge(msg: Message): Observable<any> {
        return this.http.post(this.url, msg, {params: this.tkn})
            .map((res) => {
                    console.log(res)
                    const newMsg = res.obj;
                    const localMsg = new Message(newMsg.content, newMsg.user.firstName, newMsg._id, newMsg.user._id);
                    this.messages.push(localMsg)
                    return localMsg;
                }
            )
            .catch(err => {
                this.errorService.openDialog(err.error.title, err.error.error.message)
                return Observable.throw(err)
            })
    }

    @Output() msgToEdit: EventEmitter<Message> = new EventEmitter<Message>();

    editMsg(msg: Message) {
        this.msgToEdit.emit(msg);
    }

    updateMsg(msg: Message): Observable<any> {
        return this.http.patch(this.url + msg.id, msg, {params: this.tkn}).map(i => {
            console.log(i);
            return i;
        })
    }

    getMessage(): Observable<any> {
        return this.http.get(this.url)
            .map((v) => {
                    console.log(v);
                    let msgs: Message[] = [];
                    for (let msg of v.obj) {
                        let newMsg: Message = new Message(msg.content, msg.user.firstName, msg._id, msg.user._id)
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
        return this.http.delete(this.url + msg.id, {params: this.tkn}).map(i => {
            console.log(i);
            return i;
        })
    }
}