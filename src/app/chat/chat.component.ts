import { Component, OnInit } from '@angular/core';
import { ChatServiceService } from '../chat-service.service';
// import $ from 'jquery/dist/jquery.js';
//  var $ = require('jquery')
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [ChatServiceService]
})
export class ChatComponent implements OnInit {
  imgBaseUrl = 'assets/images';
  fs_color = {active:false};
  // initialize variable
  public activityView:string;
  public allUsers:[any];
  public selectedUser = {};

  constructor(private chatService:ChatServiceService) { }

  ngOnInit() { 
    this.chatService.getAllUsers('userList').subscribe(response => this.allUsers = response.list, error => console.log(error));
    //console.log(this.allUsers)
    // clear selection
    // $('#clear_selection').on('click', function() {
    //   alert("clear")
    //   this.selectedUser = {};
    //   return;
    // })
  }
 
  openActivity(activity){ 
    console.log(this.allUsers)
    switch(activity){
      case 'contacts':
        this.activityView = 'contacts';
        break;
      case 'recent':
        this.activityView = 'recent';
        break;
      case 'newGroup':
        this.activityView = 'newGroup';
        break;
      default : return;
    }
  }

  // clear selected users
  clearSelection(){
    this.selectedUser = {};
  }
  // create new group
  createNewGroup(){
    
  }

}
