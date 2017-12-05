
import {Component} from "@angular/core";

@Component({
    selector:'my-error'
    templateUrl:'./error.component.html',
    styleUrls:['./error.component.css']
})
exports class ErrorComponent{
    constructor(private  title:string,private  msg:string)
}