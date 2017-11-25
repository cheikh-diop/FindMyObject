import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';

import { AdvertComponent } from './advert/advert.component';
import { AdvertService } from './advert.service';
import { ConnectionComponent } from './connection/connection.component';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';
import { CreateAdvertComponent } from './create-advert/create-advert.component';



@NgModule({
  declarations: [
    AppComponent,
  
    AdvertComponent,
    ConnectionComponent,
    CreateAdvertComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      [{ path: 'advert', component: AdvertComponent },
      { path: 'createAdvert', component: CreateAdvertComponent },
      
      { path: '', redirectTo: 'advert', pathMatch: 'full' },


      ]
    )
  ],
  providers: [DataService, AdvertService],
  bootstrap: [AppComponent]
})
export class AppModule { }