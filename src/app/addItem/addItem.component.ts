import {Component, OnInit} from '@angular/core';
import { ProductInformationService} from "../product-information.service";
import {ActivatedRoute, Router} from "@angular/router";
import {GlobalConnectionsService} from "../global-connections.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-addItem',
  templateUrl: './addItem.component.html',
  styleUrls: ['./addItem.component.css']
})
export class AddItemComponent implements OnInit{
  item:any =   {"Id":null, "Name":"", "Category":0, "Price":null, "Images":[], "Description":"", "Sizes":["0"]};
  public categories:{'id':number,Name:string}[]=[];
  public existingItemID:any = null;
  public userLoggedIn = true;
  subscription:Subscription | undefined;

  constructor(private informationService: ProductInformationService, private router: Router, private route: ActivatedRoute, private globalConnectionsService:GlobalConnectionsService) {
    this.informationService.getCategories()
      .subscribe(data => {
        this.categories = data;
        this.globalConnectionsService.setRouterOutlet("additem");
        let ids = this.route.snapshot.paramMap;
        let productIds:any = [ids.get('categoryId'),ids.get('productId')];
        if(productIds[0]!=null && productIds[1]!=null) {
          this.informationService.getProductDetails(productIds[0], productIds[1])
            .subscribe(data => {
              this.existingItemID = productIds[0];
              this.item = data;
              this.item.Category = this.categories[this.item.Category].Name;
            })
        }else{
          this.globalConnectionsService.setCurrentCategoryId(5);
        }
      });
  }

  ngOnInit(){
    this.globalConnectionsService.getUserLoggedInState().subscribe((value)=>{
      this.userLoggedIn = value;
    })
  }
  checkInvalidity(condition:any){
    if(condition){
      return "red";
    }else{
      return "";
    }
  }
  onFileSelected(event:any){
    let tempList = [];
    for(let file of event.target.files){
      tempList.push("assets/"+file.name);
    }
    this.item.Images = tempList;
  }

  submit(){
    this.item.Category = this.categories.filter(category=>category.Name==this.item.Category)[0].id;
    if(this.existingItemID==null){
      this.informationService.saveItem(this.item)
        .subscribe(result => this.router.navigate(['/product',this.item.Category,result]))
    }else{
      this.informationService.updateItem(this.item, this.existingItemID)
        .subscribe(result => {
          if(result==-1){
            this.router.navigate(['/product',this.item.Category,this.item.Id]);
          }else{
            this.globalConnectionsService.setCurrentCategoryId(this.item.Category);
            this.router.navigate(['/product',this.item.Category,result]);
          }
        })
    }
  }

  isSubmittable(isDescriptionValid:any,isDescriptionTouched:any,isNameValid:any,isNameTouched:any,isPriceValid:any,isPriceTouched:any,isFormChanged:any):boolean{
    if(this.existingItemID==null){
      return isDescriptionValid && isDescriptionTouched && isNameValid && isNameTouched && isPriceValid && isPriceTouched && this.item.Images.length>0 && this.userLoggedIn;
    }else{
      return isDescriptionValid && isNameValid && isPriceValid && this.item.Images.length>0 && this.userLoggedIn && isFormChanged;
    }
  }
  addSize(){
    this.item.Sizes.push("0");
  }

  removeSize(index:number){
    this.item.Sizes.splice(index,1);
  }

  ngOnDestroy(){
    this.subscription?.unsubscribe();
  }
}
