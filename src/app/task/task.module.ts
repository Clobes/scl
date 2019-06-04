import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TaskRoutingModule } from "./task-routing.module";
import { TaskComponent } from "./task.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        TaskRoutingModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        TaskComponent,
        ItemDetailComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TaskModule { }
