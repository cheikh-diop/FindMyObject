import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Advert } from './advert';

@Injectable()
export class AdvertService {

  advert:any;
  constructor(
    private http : Http) { }
  getAdverts() {

    return this.http.get("/advert/getAllAdvert")
    .map(advert => this.advert = advert.json().data);
    
  
  }

}
