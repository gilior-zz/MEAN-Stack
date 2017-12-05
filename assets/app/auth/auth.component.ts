import {Component, OnInit} from "@angular/core";
import {Message} from "../model/model";
import {MessageService} from "../services/message.service";
import {AuthService} from "../services/auth.service";

@Component({
    selector: 'auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
    constructor(private  authService:AuthService) {

    }



    ngOnInit(): void {
    }


}