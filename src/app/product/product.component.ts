import {Component, OnInit} from '@angular/core';
import {ProductInformationService} from "../product-information.service";
import {ActivatedRoute, Router} from "@angular/router";
import {GlobalConnectionsService} from "../global-connections.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  public buyingItemCount:any = 1;
  public productDetails:any = {Id: null, "Name":"Product Name", "Description":"Description", "Price":0, "Sizes":[], "Images":[]};
  public images:any=[];
  public productIds:any = [];
  public loggedIn = false;
  constructor(public informationService: ProductInformationService, private route: ActivatedRoute, private globalConnectionsService:GlobalConnectionsService, private router:Router) {
    this.globalConnectionsService.setRouterOutlet("product");
  }
  ngOnInit() {
    let ids = this.route.snapshot.paramMap;
    this.productIds = [ids.get('categoryId'),ids.get('productId')];
    this.globalConnectionsService.setCurrentCategoryIdWhenBack(this.productIds[0]);
    this.informationService.getProductDetails(this.productIds[0],this.productIds[1])
      .subscribe(data => this.productDetails = data);
    this.globalConnectionsService.getUserLoggedInState().subscribe((val)=>{
      this.loggedIn = val;
    })
  }

  gotoUpdate(){
    this.router.navigate(['/addItem',this.productIds[0],this.productIds[1]]);
  }
  public increaseBuyingItemCount(increase:boolean){
    if(increase) {
      ++this.buyingItemCount;
    }else{
      --this.buyingItemCount;
    }

  }

}
