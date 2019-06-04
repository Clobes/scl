import { Component, NgZone } from "@angular/core";
//import { Kinvey } from "kinvey-nativescript-sdk";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html"
})
export class LoginComponent {

    constructor(private _routerExtensions: RouterExtensions, private zone: NgZone, private page: Page) {
        this.page.actionBarHidden = true;
        this.page.backgroundSpanUnderStatusBar = true;
        this.page.className = "page-login-container";
        this.page.statusBarStyle = "dark";
    }

    login() {
        this.navigateHome();
    }

    private navigateHome() {
        this.zone.run(() => {
            this._routerExtensions.navigate(["sign-in"], {
                clearHistory: true,
                animated: true,
                transition: {
                    name: "slideTop",
                    duration: 350,
                    curve: "ease"
                }
            });
        });
    }
}
