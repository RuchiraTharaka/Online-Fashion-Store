import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent} from "./product/product.component";
import {AddItemComponent} from "./addItem/addItem.component";
import {ItemListComponent} from "./item-list/item-list.component";
import {ItemComponent} from "./item/item.component";
import {PromotionsComponent} from "./promotions/promotions.component";

const routes: Routes = [
  {path: 'promotions', component:PromotionsComponent},
  {path: 'product/:categoryId/:productId', component:ProductComponent},
  {path: 'addItem/:categoryId/:productId', component:AddItemComponent},
  {path: 'addItem', component:AddItemComponent},
  {path: '', component:ItemListComponent},
  {path: ':id', component:ItemListComponent},
  {path: '**', component:ItemListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
