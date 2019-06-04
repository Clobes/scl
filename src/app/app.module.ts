import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
//is logged
import { LoggedInLazyLoadGuard } from "./logged-in-lazy-load.guard";
//http
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client"

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        LoggedInLazyLoadGuard
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
