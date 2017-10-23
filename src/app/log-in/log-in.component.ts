import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //<-
import { UserAuthService, AuthUser } from '../user-auth.service'; //<-
//import * as _ from "lodash";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  protected authList:AuthUser[];
  //public logInUserInfo:AuthUser;
  public isUnAuth:boolean= false;
  constructor(private router:Router, private userAuth:UserAuthService) { }

  ngOnInit() { 
    this.userAuth.getAuthUser().subscribe(response => this.authList = response.list, error => console.log(error));
  } 

  // check valid user
  logInUser(event){
    let userName = event.target.elements[0].value;
    let userPassword = event.target.elements[1].value;
    if(this.isUnAuth){
      event.target.elements[0].value = this.authList[0].userId;
      event.target.elements[1].value = this.authList[0].password;
      this.router.navigate(['dash-board']);
    }else if(userName == this.authList[1].userId && userPassword == this.authList[1].password){
      this.router.navigate(['dash-board']);
    }else{
      alert("You are not Registered with Us.");
      return;
    }
    
    // if(userName ==="admin" && userPassword === "admin"){
    //   // this.router.navigate(['']);
    // }else{
    //   alert("You aren't authorized to login.");
    //   return;
    // }
  }
}
