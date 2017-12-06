import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AdvertComponent } from './advert/advert.component';
import { AdvertDetailComponent } from './advert-detail/advert-detail.component';
import { LoginComponent } from './login/login.component';
import { CreateAdvertComponent } from './create-advert/create-advert.component';
import { Router } from '@angular/router';
import { FlashMessagesModule } from 'ngx-flash-messages/';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import {AuthGuardService} from './auth-guard.service'

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'login' }
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    //canActivate:[AuthGuardService],
    data: { title: 'login' }
  },
  {
    path: 'adverts',
    component: AdvertComponent,
    //canActivate:[AuthGuardService],
    data: { title: 'Advert List' }
  },
  {
    path: 'createAdvert',
    component: CreateAdvertComponent,
    data :{ title : 'create advert '}
  }
  ,
  {
    path: 'advert-detail/:id',
    //canActivate:[AuthGuardService],
    component: AdvertDetailComponent
  }
  ,
  {
    path: '',
    redirectTo: '/login',
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
    DashboardComponent,
    NavbarComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    FlashMessagesModule,
    CommonModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [LoginComponent,AuthGuardService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
