import {Component, EventEmitter, Input, Output} from '@angular/core'
import {Message, User} from "../../model/model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {MessagesComponent} from "../../messages-module/messages/messages.component";
import {AuthComponent} from "../auth/auth.component";
import {SignupComponent} from "../signup/signup.component";
import {LogoutComponent} from "../logout/logout.component";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {ErrorComponent} from "../../errors/error.component";
import {ErrorService} from "../../services/error.service";


@Component({
    selector: 'signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css'],

})
export class SigninComponent {
    frm: FormGroup

    constructor(private  fb: FormBuilder, private  authService: AuthService, private  rtr: Router, public dialog: MatDialog
    ,private  errorService:ErrorService) {
        this.buildFrm();
    }

    onSubmit() {
        const user = new User(this.frm.value.email, this.frm.value.pwd);
        this.authService.sginin(user).subscribe(
            res => {
                const tkn = res.tkn;
                const id = res.obj._id;
                localStorage.setItem('tkn', tkn);
                localStorage.setItem('id', id);
                this.frm.reset();
                this.rtr.navigateByUrl('/')
            },
            err => {
                // let data: MatDialogConfig = new MatDialogConfig();
                // data.width = '600px';
                // data.height = '400px';
                // data.data = {title: 'cxvcxv', msg: 'dsfdsfd'}
                // this.dialog.open(ErrorComponent, data);
                // this.errorService.openDialog('cxvcxv','cxvcxv');
            }
        )
    }

    private buildFrm() {
        this.frm = this.fb.group({

            email: ['', [Validators.required, Validators.pattern('^(([^<>()\\[\\]\\.,;:\\s@\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$')]],
            pwd: ['', Validators.required]


        })
    }

}