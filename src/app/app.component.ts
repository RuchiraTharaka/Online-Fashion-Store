import {Component, HostListener, OnInit} from '@angular/core';
import {ProductInformationService} from "./product-information.service";
import {ActivatedRoute, Router} from "@angular/router";
import {GlobalConnectionsService} from "./global-connections.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @HostListener('window:popstate', ['$event'])
  onPopState(event:any) {
    setTimeout(()=>{
      this.globalConnectionsService.setCurrentCategoryId(this.globalConnectionsService.getCurrentCategoryIdWhenBack());
    },20) //This is not the best way (we have to wait until product component populates the categoryId)
  }
  public shopName = "Fabric Hop";
  public currentCategory:any=0;
  public backgroundImages:any =[];
  public categories:any = [];
  public branches:any = [];

  constructor(public informationService: ProductInformationService, private router: Router, private route:ActivatedRoute, private globalConnectionsService:GlobalConnectionsService) {
    this.globalConnectionsService.setCurrentCategoryId(0);
    this.informationService.getCategories()
      .subscribe(data => this.categories = data);
    this.informationService.getBranches()
      .subscribe(data => this.branches = data);
    this.informationService.getBackgroundImages()
      .subscribe(data => this.backgroundImages = data);
  }

  ngOnInit(){
    this.globalConnectionsService.getCurrentCategoryId().subscribe((id)=> {
      this.currentCategory=id
    })
  }

  public gotoCategory(id: number) {
    this.globalConnectionsService.setCurrentCategoryId(id);
    if(this.globalConnectionsService.getRouterOutlet()!="itemlist"){
      this.globalConnectionsService.setRouterOutlet("itemlist");
      this.router.navigate(['']);
    }
  }

  public decideColor(i:number){
   return i==this.currentCategory?"rgb(255,255,255,0.5)":"";
  }

  inHome():any{
    let currentRouterOutlet = this.globalConnectionsService.getRouterOutlet();
    return this.currentCategory==0 && currentRouterOutlet=="itemlist"?"none":"inline-block";
  }
  back(){
    let currentRouterOutlet = this.globalConnectionsService.getRouterOutlet();
    if(currentRouterOutlet=="product"){
      this.globalConnectionsService.setRouterOutlet("itemlist");
      this.router.navigate(['']);
    }else if(currentRouterOutlet=="itemlist"){
      this.globalConnectionsService.setCurrentCategoryId(0);
    }else if(currentRouterOutlet=="additem"){
      if(this.currentCategory == 5){
        this.globalConnectionsService.setCurrentCategoryId(0);
        this.globalConnectionsService.setRouterOutlet("itemlist");
        this.router.navigate(['']);
      }else{
        let ids = this.router.url.split('/');
        this.router.navigate(['/product',this.currentCategory,ids[ids.length-1]]);
      }
    }
  }
}
