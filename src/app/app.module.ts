import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ItemComponent } from './item/item.component';
import {ProductInformationService} from "./product-information.service";
import { ProductComponent } from './product/product.component';
import { PromotionsComponent } from './promotions/promotions.component';
import {NgOptimizedImage} from "@angular/common";
import { AddItemComponent } from './addItem/addItem.component';
import {FormsModule} from "@angular/forms";
import { ItemListComponent } from './item-list/item-list.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ItemComponent,
    ProductComponent,
    PromotionsComponent,
    AddItemComponent,
    ItemListComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule
    ],
  providers: [ProductInformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
