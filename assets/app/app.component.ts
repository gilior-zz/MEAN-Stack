import {Component} from '@angular/core';
import {Message} from "./model/model";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    message: Message = {content: 'a', id: 'b', userId: 'c', userName: 'd'}

    onEdit(str:string){

    }
}