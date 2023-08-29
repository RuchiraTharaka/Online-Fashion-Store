import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";

//
@Injectable({
  providedIn: 'root'
})
export class ProductInformationService {

  constructor(private httpClient: HttpClient) { }

  public getCategories(): Observable<any>{
    return this.httpClient.get("http://localhost:8080/otherservices/categories");
  }

  public getAllDetails(Id:number){
    console.log("Retrieved");
    return this.httpClient.get("http://localhost:8080/itemlist/"+Id);
  }
  public getProductDetails(Id1:number,Id2:number){
    return this.httpClient.get("http://localhost:8080/itemlist/"+Id1+"/"+Id2);
  }

  public getBranches(){
    return this.httpClient.get("http://localhost:8080/otherservices/branches");
  }

  public getBackgroundImages(){
    return this.httpClient.get("http://localhost:8080/otherservices/backgroundimages");
  }

  saveItem(item:any){
    return this.httpClient.post("http://localhost:8080/itemlist",item);
  }

  updateItem(item:any, previousCategoryId:number){
    return this.httpClient.put("http://localhost:8080/itemlist",{item:item, previousId:previousCategoryId});
  }
}
