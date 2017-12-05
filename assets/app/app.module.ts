import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "./header/header.component";
import {AppRoutingModule} from "./app.routing";
import {HttpClientModule} from "@angular/common/http";
import {ErrorComponent} from "./errors/error.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDialogModule} from "@angular/material";
import {CoreModule} from "./core.module";
import {SharedModule} from "./shared.module";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ErrorComponent
    ],
    providers: [],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, MatDialogModule, CoreModule,SharedModule],
    entryComponents: [ErrorComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}