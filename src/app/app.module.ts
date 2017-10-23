import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'; //<-

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome'; //<- font-aewsome
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; //<- animation support form material
import { MaterialExportModule } from './material-export/material-export.module'; // material module
import { Ng2CarouselamosModule } from 'ng2-carouselamos'; // Ng2 crousel -- not worked properlly.
import { NgxCarouselModule } from 'ngx-carousel';   //Ngx Carousel

import { AppComponent } from './app.component';
import { UserAuthService } from './user-auth.service'; //<-
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { LogInComponent } from './log-in/log-in.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ChatComponent } from './chat/chat.component';
import { PersonalComponent } from './personal/personal.component';
import { SubNavComponent } from './sub-nav/sub-nav.component';
import { CrouselComponent } from './crousel/crousel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    LogInComponent,
    DashBoardComponent,
    ChatComponent,
    PersonalComponent,
    SubNavComponent,
    CrouselComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFontAwesomeModule, //<-
    BrowserAnimationsModule,
    MaterialExportModule,
    Ng2CarouselamosModule, // not worked properlly.
    NgxCarouselModule,
    RouterModule.forRoot([  
      {
        path:'',
        component:LogInComponent
      },
      {
        path:'dash-board',
        component:DashBoardComponent,
        children:[
          {
            path:'personal',
            component:PersonalComponent,
            children:[{
              path:'chat',
              component:ChatComponent
            },
            {
              path:'crousel',
              component:CrouselComponent
            }
            ]
          }
        ]
      },
      // {
      //   path:'personal',
      //   component:PersonalComponent
      // }
    ])
  ],
  providers: [UserAuthService], //<-
  bootstrap: [AppComponent]
})
export class AppModule { }
