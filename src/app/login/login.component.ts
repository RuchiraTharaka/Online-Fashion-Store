import { Component} from '@angular/core';
import {Router} from "@angular/router";
import {GlobalConnectionsService} from "../global-connections.service";
import {LoginComponentAnimations} from "./login.component.animations";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations:[LoginComponentAnimations.loginAnimationTrigger]
})
export class LoginComponent {
  public Topic = "Fabric Login";
  public credentials = {"username":"123","password":"123"};
  public userLoggedIn = false;
  state = 'default';

  constructor(private router: Router, private globalConnectionsService:GlobalConnectionsService) {
  }
  public checkCredentials(credentials:any) {
    this.state = 'default';
    if(credentials.username==this.credentials.username && credentials.password==this.credentials.password) {
      this.userLoggedIn = true;
      this.globalConnectionsService.setUserLoggedInState(this.userLoggedIn);
    }else{
      setTimeout(()=>{
        this.state = 'wrongInput';
      },1) ;        //To identify a state change there should be a time gap between changes
    }
  }

  logOut(){
    this.userLoggedIn=false;
    this.globalConnectionsService.setUserLoggedInState(this.userLoggedIn);
  }
  public promotionsClicked(){
    this.router.navigate(['/promotions']);
  }
  public transactionsClicked(){

  }
  public trackingClicked(){

  }
  public addItemClicked(){
    this.router.navigate(['/addItem']);
  }
}
