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
  public activityView:string = "contacts";
  public allUsers:[any];
  public selectedUsers = {};
  public selectedUser: {} | userContacts;

  constructor(private chatService:ChatServiceService) { }

  ngOnInit() { 
    this.chatService.getAllUsers('userList').subscribe(response => this.allUsers = response.list, error => console.log(error));
  }
 
  openActivity(activity){ 
    //console.log(this.allUsers)
    this.forgetSelection();
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
    this.selectedUsers = {};
  }
  // create new group
  createNewGroup(){
    
  }
  // create new chat
  createNewChat(userData){
    this.selectedUser = userData;
  }
  // reset selection on tab change
  forgetSelection(){
    this.selectedUsers = {};
    this.selectedUser = {};
  }
}

export interface userContacts{
  active: boolean,
  busyStatus: boolean,
  currentState: [string],
  didList: [any],
  entityIconPath: string,
  entityId: number,
  entityName: string,
  entityType: string,
  extn: number,
  iconPath: string,
  lobName: string,
  rollName: string,
  userId: number,
  userName: string
}
