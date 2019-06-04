import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";



// export interface IDataItem {
//     id: number;
//     name: string;
//     description: string;
// }

@Injectable({
    providedIn: "root",
    
})
export class TaskService {
    public item: any;
    private serverUrl = "https://restcountries.eu/rest/v2/all";
    
    constructor(private http: HttpClient) { }


    public getData() {  
        console.log("estoy en servicio");
        return this.http.get(this.serverUrl);
     }

    public getCountries(){
        return this.getData();
    }

     public getCountry(id: Number){
         //let idS = id.toString();
         //let url = "https://restcountries.eu/rest/v2/callingcode/"+idS;
         //console.log(url);
         //this.item = this.http.get(url); 
         //console.log(this.item);
         return this.http.get("https://restcountries.eu/rest/v2/callingcode/"+id); 
         //console.log(id + " " + this.items.json());
          //return this.items.filter((item) => item.numericCode === id)[0];
     }

    
    
}
