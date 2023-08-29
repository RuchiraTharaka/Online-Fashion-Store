import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductInformationService} from "../product-information.service";
import {ActivatedRoute} from "@angular/router";
import {GlobalConnectionsService} from "../global-connections.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit, OnDestroy{
  public itemDetailsList:any;
  public currentCategory:any=null;
  subscription: Subscription | undefined
  constructor(public informationService: ProductInformationService, private route: ActivatedRoute, private globalConnectionsService:GlobalConnectionsService) {

  }

  ngOnInit() {
    this.subscription = this.globalConnectionsService.getCurrentCategoryId().subscribe((id)=>{
      if(this.currentCategory!=id){
        this.currentCategory = id;
        this.informationService.getAllDetails(this.currentCategory)
          .subscribe(data => {
            this.itemDetailsList = data;
          });
      }
    })
  }
  ngOnDestroy(){
    this.subscription?.unsubscribe();
  }

}
