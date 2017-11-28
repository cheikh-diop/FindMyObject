import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule , Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AdvertComponent } from './advert/advert.component';
import { FormArray } from '@angular/forms/src/model';
import { Router } from '@angular/router/src/router';
import { CreateAdvertComponent } from './create-advert/create-advert.component';

const appRoutes: Routes = [
  {
    path: 'adverts',
    component: AdvertComponent,
    data: { title: 'Advert List' }
  },
  { path: '',
    redirectTo: '/createAdvert',
    pathMatch: 'full'
  },
  {
    path: 'createAdvert',
    component: CreateAdvertComponent,
  }

];

@NgModule({
  declarations: [
    AppComponent,
    AdvertComponent,
    CreateAdvertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes, 
      { enableTracing :true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
