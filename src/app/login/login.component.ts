import { Component, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";
import {GlobalConnectionsService} from "../global-connections.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public Topic = "Fabric Login";
  public credentials = {"username":"123","password":"123"};
  public userLoggedIn = false;

  constructor(private router: Router, private globalConnectionsService:GlobalConnectionsService) {
  }
  public checkCredentials(credentials:any) {
    if(credentials.username==this.credentials.username && credentials.password==this.credentials.password) {
      this.userLoggedIn = true;
      this.globalConnectionsService.setUserLoggedInState(this.userLoggedIn);
    }
  }

  logOut(){
    this.userLoggedIn=false;
    this.globalConnectionsService.setUserLoggedInState(this.userLoggedIn);
  }
  public promotionsClicked(){

    // this.router.navigate(['/promotions']);
  }
  public transactionsClicked(){

  }
  public trackingClicked(){

  }
  public addItemClicked(){
    this.router.navigate(['/addItem']);
  }
}
