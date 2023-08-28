import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GlobalConnectionsService {
  public userLoggedIn= new BehaviorSubject<boolean>(false);
  public currentCategoryId= new BehaviorSubject<number>(0);
  private routerOutlet:string = "itemlist";
  private currentCategoryIdWhenBack:number =0;

  constructor() {  }

  public setUserLoggedInState(newVal:boolean){
    this.userLoggedIn.next(newVal);
  }
  public  getUserLoggedInState():Observable<boolean>{
    return this.userLoggedIn.asObservable();
  }

  public setCurrentCategoryId(newVal:number){
    this.currentCategoryId.next(newVal);
  }
  public  getCurrentCategoryId():Observable<number>{
    return this.currentCategoryId.asObservable();
  }

  public getRouterOutlet(): string {
    return this.routerOutlet;
  }
  public setRouterOutlet(value: string) {
    this.routerOutlet = value;
  }

  public getCurrentCategoryIdWhenBack(): number {
    return this.currentCategoryIdWhenBack;
  }
  public setCurrentCategoryIdWhenBack(value: number) {
    this.currentCategoryIdWhenBack = value;
  }

}
