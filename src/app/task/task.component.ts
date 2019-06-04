import { Component, OnInit } from "@angular/core";
import { TaskService } from "../shared/services/taskServices/task.service";
import { RouterExtensions } from "nativescript-angular/router";

import { error } from "@angular/compiler/src/util";

@Component({
    selector: "Task",
    moduleId: module.id,
    templateUrl: "./task.component.html"
})
export class TaskComponent implements OnInit {
    processing = false;
    public items: any = [];

    constructor(
        private _taskService: TaskService,
        private _routerExtensions: RouterExtensions
        ){}
       // console.log("estoy en taskComponent");
       

    ngOnInit(): void {
        //this._taskService.getCountries()
        this.processing = true;
        this._taskService.getCountries().subscribe( response =>{
            this.items = response;
            this.processing = false;            
           console.log(this.items);
        },error => console.log(error));
    } 

    onBackTap(): void {
        this._routerExtensions.navigate(["/home"],
        {
            clearHistory: true,
            animated: true,
            transition: {
            name: "slideBottom",
            duration: 350,
            curve: "ease"
        }
    });
        console.log("estoy en onBack")
        //this._routerExtensions.back();
    }

    // public getCountry(id: Number){
    //     return this.items.filter((item) => item.numericCode === id)[0];
    // }

}
    

