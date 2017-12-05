import {Injectable} from "@angular/core";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {ErrorComponent} from "../errors/error.component";

@Injectable()
export class ErrorService {
    constructor(public dialog: MatDialog) {
    }

    openDialog(title: string, msg: string): void {
        let data: MatDialogConfig = new MatDialogConfig();
        data.width = '600px';
        data.height = '400px';
        data.data = {title: title, msg: msg}

        this.dialog.open(ErrorComponent, data);
    }

}
