import { BrowserModule } from '@angular/platform-browser';
import { FileSaverModule } from 'ngx-filesaver';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AdvertComponent } from './advert/advert.component';
import { FormArray } from '@angular/forms/src/model';
import { Router } from '@angular/router/src/router';
import { CreateAdvertComponent } from './create-advert/create-advert.component';
import { AdvertDetailComponent } from './advert-detail/advert-detail.component';
import { SearchAdvertComponent } from './search-advert/search-advert.component';

const appRoutes: Routes = [
  {
    path: 'adverts',
    component: AdvertComponent,
    data: { title: 'Advert List' }
  },
  {
    path: 'advert-detail/:id',
    component: AdvertDetailComponent,
    data: { title: 'Advert List' }
  },
  { path: '',
    redirectTo: '/SearchAdvert',
    pathMatch: 'full'
  },
  {
    path: 'createAdvert',
    component: CreateAdvertComponent,
  },
  {
    path: 'SearchAdvert',
    component: SearchAdvertComponent,
  },

];

@NgModule({
  declarations: [
    AdvertDetailComponent,
    AppComponent,
    AdvertComponent,
    CreateAdvertComponent,
    SearchAdvertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FileSaverModule,
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
