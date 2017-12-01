import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { RouterModule , Routes } from '@angular/router';

=======
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
>>>>>>> master

import { AppComponent } from './app.component';
import { AdvertComponent } from './advert/advert.component';
import { FormArray } from '@angular/forms/src/model';
import { Router } from '@angular/router/src/router';
<<<<<<< HEAD
import { CreateAdvertComponent } from './create-advert/create-advert.component';
=======
import { AdvertDetailComponent } from './advert-detail/advert-detail.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
>>>>>>> master

const appRoutes: Routes = [
  {
    path: 'adverts',
    component: AdvertComponent,
    data: { title: 'Advert List' }
  },
<<<<<<< HEAD
  { path: '',
    redirectTo: '/createAdvert',
    pathMatch: 'full'
  },
  {
    path: 'createAdvert',
    component: CreateAdvertComponent,
  }

=======
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
>>>>>>> master
];

@NgModule({
  declarations: [
<<<<<<< HEAD
    AppComponent,
    AdvertComponent,
    CreateAdvertComponent
=======
    
    AppComponent,
    AdvertComponent,
    AdvertDetailComponent,
    LoginComponent,
    SignupComponent
>>>>>>> master
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes, 
      { enableTracing :true }
=======
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
>>>>>>> master
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
