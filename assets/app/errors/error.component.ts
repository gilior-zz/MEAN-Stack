import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
    selector: 'my-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.css']
})
export class ErrorComponent {


    get title(): string {
        return this.data.title
    }

    get msg(): string {
        return this.data.msg
    }

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {

    }


}