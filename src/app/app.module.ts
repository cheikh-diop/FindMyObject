import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AdvertComponent } from './advert/advert.component';
import { AdvertService } from './advert.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    AdvertComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DataService, AdvertService],
  bootstrap: [AppComponent]
})
export class AppModule { }