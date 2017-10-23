import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  imgBaseUrl = 'assets/images';
  constructor(private router:Router) { }

  ngOnInit() {
  }
  // goTo(screen_view){
  //   switch(screen_view){
  //     case 'personal':
  //       this.router.navigate(['personal']);
  //   }
  // }
}
