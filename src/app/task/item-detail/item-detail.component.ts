import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { TaskService} from "../../shared/services/taskServices/task.service";
// import { HomeComponent } from "../home.component";

@Component({
    selector: "ItemDetail",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    item: any;
    processing = false;
    //params: any;

    constructor(
        private _taskService: TaskService,
        private _route: ActivatedRoute,
        private _routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        const id = +this._route.snapshot.params.id;
        this.processing = true;
        //console.log(id);
        
        this.item = this._taskService.getCountry(id).subscribe( response =>{
            this.processing = true;
            this.item = response;
            console.log(this.item[0].name);
            },error => console.log(error));
    }

    onBackTap(): void {
        this._routerExtensions.back();
    }
}
