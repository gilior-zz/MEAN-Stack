import {Component, OnInit} from "@angular/core";
import {Message} from "../model/model";
import {MessageService} from "../services/message.service";

@Component({
    selector: 'my-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    constructor() {

    }



    ngOnInit(): void {
    }


}