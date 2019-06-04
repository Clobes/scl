import { Component, ElementRef, OnInit } from "@angular/core";
//import { Kinvey, User } from "kinvey-nativescript-sdk";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page";
import { EventData } from "tns-core-modules/data/observable";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    loggedUser: string;

    constructor(private _routerExtensions: RouterExtensions, private page: Page) {
        this.page.actionBarHidden = false;
    }

    ngOnInit(): void {
        // Kinvey.User.me()
        //     .then((user: User) => {
        //         this.loggedUser = user.data["_socialIdentity"].kinveyAuth.id;
        //     });
        this.loggedUser="admin@admin";
    }

     logout() {
        this._routerExtensions.navigate(["login"],
            {
                clearHistory: true,
                animated: true,
                transition: {
                name: "slideBottom",
                duration: 350,
                curve: "ease"
            }
        });
     }

     onTapTaskList(args: EventData) {
       // console.log("task");
        this._routerExtensions.navigate(["/task"],
            {
                clearHistory: true,
                animated: true,
                transition: {
                name: "slideBottom",
                duration: 350,
                curve: "ease"
            }
        });
        // Navigate to corresponding page
        //const menuButtonParent = (<StackLayout>args.object).parent;
        //alert("Navigate to " + menuButtonParent.get("data-name"));
    }

    onProfileButtonTap() {
        // Navigate to profile page here
        alert("Navigate to profile page");
    }
}
