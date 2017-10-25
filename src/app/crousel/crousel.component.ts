import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-crousel',
  templateUrl: './crousel.component.html',
  styleUrls: ['./crousel.component.css']
})
export class CrouselComponent implements OnInit {
  items: Array<any> = [];
  public carouselBannerItems: Array<any>;
  public carouselBanner: Carousel;
  constructor() {
    this.items = [
      {name:'assets/images/carousel_img/animal1.jpg'},
      {name:'assets/images/carousel_img/animal2.jpg'},
      {name:'assets/images/carousel_img/animal3.jpg'},
      {name:'assets/images/carousel_img/wind1.jpg'},
      {name:'assets/images/carousel_img/wind2.jpg'}
    ]; 
   }

  ngOnInit() {
    this.carouselBannerItems = this.items;
    this.carouselBanner = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 500,
      interval: 4000,
      point: true,
      load: 2,
      loop: true, 
      custom: 'tile',
      touch: true,
      dynamicLength: true
    }
    setTimeout(()=>{
      $('.ngxcarouselPoint').css({'background-color':'#ddd'});
      $('.ngxcarouselPoint ul').css({'padding':'0px', 'padding-bottom':'4px'});
      $('.ngxcarouselPoint ul li').css({'padding':'2px'});
      //$('.ngxcarouselPoint ul li.active').css({'transform':'scale(1.4)'});
    },300)
  }

  public carouselBannerLoad(evt: any) {
    
      //  const len = this.carouselBannerItems.length
      //  if (len <= 10) {
      //    for (let i = len; i < len + 10; i++) {
      //      this.carouselBannerItems.push(i);
      //    }
      //  }
      // $('.ngxcarouselPoint').css('background-color','#fff');
      // $('.ngxcarouselPoint').on('click',function(){alert("called")})
  };


}
export class Carousel {
  grid: Grid;
  slide?: number;
  speed?: number;
  interval?: number;
  animation?: Animate;
  point?: boolean;
  type?: string;
  load?: number;
  custom?: Custom;
  loop?: boolean;
  easing?: string;
  touch?: boolean;
  dynamicLength: boolean;
}
 
export class Grid {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  all: number;
}
 
export type Custom = 'tile';
export type Animate = 'lazy';