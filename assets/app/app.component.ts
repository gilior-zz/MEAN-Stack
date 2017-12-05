import {Component} from '@angular/core';
import {Message} from "./model/model";
import {AuthService} from "./services/auth.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    message: Message = {content: 'a', id: 'b', userId: 'c', userName: 'd'}
constructor(private  authService:AuthService){}
    onEdit(str:string){

    }
}