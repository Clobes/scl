import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { LoggedInLazyLoadGuard } from "./logged-in-lazy-load.guard";


const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "sign-in", loadChildren: "~/app/sign-in/sign-in.module#SignInModule"},
    { path: "login", loadChildren: "~/app/login/login.module#LoginModule" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule", canLoad: [LoggedInLazyLoadGuard] },
    { path: "task", component: NSEmptyOutletComponent ,loadChildren: "~/app/task/task.module#TaskModule", canLoad: [LoggedInLazyLoadGuard] },

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
