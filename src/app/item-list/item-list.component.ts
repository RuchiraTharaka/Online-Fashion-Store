import {Component, OnInit} from '@angular/core';
import {ProductInformationService} from "../product-information.service";
import {ActivatedRoute} from "@angular/router";
import {GlobalConnectionsService} from "../global-connections.service";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit{
  public itemDetailsList:any;
  public currentCategory:any=null;

  constructor(public informationService: ProductInformationService, private route: ActivatedRoute, private globalConnectionsService:GlobalConnectionsService) {
  }

  ngOnInit() {
    this.globalConnectionsService.getCurrentCategoryId().subscribe((id)=>{
      if(this.currentCategory!=id){
        this.currentCategory = id;
        this.informationService.getAllDetails(this.currentCategory)
          .subscribe(data => {
            this.itemDetailsList = data;
          });
      }
    })
  }

}
