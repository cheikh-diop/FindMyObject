import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule , Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AdvertComponent } from './advert/advert.component';
import { FormArray } from '@angular/forms/src/model';
import { Router } from '@angular/router/src/router';
import { AdvertDetailComponent } from './advert-detail/advert-detail.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


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
  ,
  {
    path: 'advert-detail/:id',
    component: AdvertDetailComponent
  }
  ,
  {
    path: '',
    redirectTo: '/adverts',
    pathMatch: 'full'
  }

];

@NgModule({
  declarations: [
    CreateAdvertComponent,
    AppComponent,
    AdvertComponent,
    AdvertDetailComponent,
    LoginComponent,
    SignupComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }

    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
