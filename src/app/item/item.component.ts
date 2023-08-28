import { Component } from '@angular/core';
import {OnInit, Input} from "@angular/core";
import {ProductInformationService} from "../product-information.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
  @Input() public categoryId:any;
  @Input() public productId:any;
  public itemDetails:any = {Id: null, "Name":"Product Name", "Description":"Description", "Price":0, "Sizes":[], "Images":[]};
  constructor(public informationService:ProductInformationService, private router: Router) {
  }
  ngOnInit() {
    this.informationService.getProductDetails(this.categoryId ,this.productId)
      .subscribe(data => this.itemDetails = data);
  }
  public gotoProduct(){
    this.router.navigate(['/product',this.categoryId,this.productId]);
  }

}
