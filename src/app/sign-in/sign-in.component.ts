import { Component, NgZone, ElementRef, ViewChild } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import { alert, prompt } from "tns-core-modules/ui/dialogs";


//models
import { User } from "../shared/models/user.model";

@Component({
    selector: "SigIn",
    moduleId: module.id,
    templateUrl: "./sign-in.component.html",
    styleUrls: ["./sign-in.css"]
})
export class SignInComponent {
    //@ViewChild("email") email: ElementRef;
    //@ViewChild("password") password: ElementRef;
    processing = false;
    user: User;



    constructor(private _routerExtensions: RouterExtensions, private zone: NgZone, private page: Page) {
        // this.page.actionBarHidden = true;
        // this.page.backgroundSpanUnderStatusBar = true;
        // this.page.className = "page-login-container";
        // this.page.statusBarStyle = "dark";
        this.page.actionBarHidden = true;
        this.user = new User();
        this.user.email = "uamo@uamo.com";
        this.user.password = "admin";

    }

    login() {
        console.log("estoy en login" + this.user.email);
        if (!this.user.email || !this.user.password) {
            this.alert("Ingrese Usuario y contraseña.");
            //this.email.nativeElement.focus();
            return;
        }
        console.log(this.user.password);
        this.processing = true;
        console.log(this.processing);
        setTimeout(res=>{
            this.processing = false;
            this.navigateHome()
           
        
        }, 3000);
        //if(this.input.email && this.input.password) {
          //  console.log("this.input.email");
            //let account = JSON.parse(ApplicationSettings.getString("account", "{}"));
            //if(this.input.email == "admin" && this.input.password == "admin") {
              //  ApplicationSettings.setBoolean("authenticated", true);
              
                //this._routerExtensions.navigate(["/secure"], { clearHistory: true });
            //} else {
          //      alert("Incorrect Credentials!");
               // (new SnackBar()).simple("Incorrect Credentials!");
            //}
        //} else {
          //  alert("All Fields Required!");
        //}
    }

    private navigateHome() {
        this.zone.run(() => {
            this._routerExtensions.navigate(["home"], {
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

    //alert 
    alert(message: string) {
        return alert({
            title: "SCL",
            okButtonText: "OK",
            message: message
        });
    }
    focusEmail() {
        //this.password.nativeElement.focus();
    }
    focusPassword() {
        //this.password.nativeElement.focus();
    }
}
