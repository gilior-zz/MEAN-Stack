import {Component, OnInit} from "@angular/core";
import {Message} from "../model/model";
import {MessageService} from "../services/message.service";

@Component({
    selector: 'auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
    constructor() {

    }



    ngOnInit(): void {
    }


}