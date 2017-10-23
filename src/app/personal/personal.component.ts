import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  imgBaseUrl = 'assets/images';
  isExpanded = false;
  constructor() { }

  ngOnInit() {
  }
  toggleNavView(e){
    if(this.isExpanded){
      e.target.innerHTML = "&gt;";
      document.getElementById('slide-menu').style.width = "45px";
      document.getElementById('main').style.marginLeft = "45px";
    }else{
      e.target.innerHTML = "&lt;";
      document.getElementById('slide-menu').style.width = "150px";
      document.getElementById('main').style.marginLeft = "150px";
    }
    this.isExpanded = !this.isExpanded;
  }
}
