import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MustMatchDirective } from './helpers/must-match.directive'



//components
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import {APP_ROUTING} from './app.routes'

//services
import { UserService } from './services/user.service';
import { ItemsService } from '../app/services/items.service';
import { LikeService } from '../app/services/like.service';

import { InformationBarComponent } from './components/information-bar/information-bar.component';
import { PublicationComponent } from './components/publication/publication.component';
import { ItemComponent } from './components/item/item.component';
import { PublicationSectionComponent } from './components/publication-section/publication-section.component';
import { KeysPipe } from './pipes/keys.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    MustMatchDirective,
    InformationBarComponent,
    PublicationComponent,
    ItemComponent,
    PublicationSectionComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    UserService,
    ItemsService,
    LikeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
