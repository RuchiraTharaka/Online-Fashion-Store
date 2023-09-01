import { Component } from '@angular/core';
import {GlobalConnectionsService} from "../global-connections.service";

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent {
  public promotions = [
    "/assets/promotionImages/promotionImage.avif",
    "/assets/promotionImages/promotionImage2.avif",
    "/assets/promotionImages/promotionImage3.avif",
    "/assets/promotionImages/promotionImage4.jpg",
    "/assets/promotionImages/promotionImage5.jpg",
    "/assets/promotionImages/promotionImage6.jpg",
    "/assets/promotionImages/promotionImage.avif"
  ]
  constructor(globalConnectionsService: GlobalConnectionsService) {
    globalConnectionsService.setCurrentCategoryId(5);
    globalConnectionsService.setRouterOutlet("promotions");
  }
}
