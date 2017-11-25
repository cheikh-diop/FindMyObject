import { Component, OnInit } from '@angular/core';
import {AdvertService } from '../advert.service';
import {Advert } from '../advert';
import { DataService } from '../data.service';
import { Http, RequestOptions, URLSearchParams, ResponseContentType } from '@angular/http';
@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})


export class AdvertComponent implements OnInit {
  
    public adverts;
    constructor( private http: Http) { }
  
    ngOnInit() {
      // URL params
      let params = new URLSearchParams();
      let requestOptions = new RequestOptions();
      requestOptions.params = params;
      requestOptions.responseType = ResponseContentType.Json;
  
      // Requête GET je pense il faut ajouter httpslocalho
      this.http.get('http://localhost:4200/advert/getAllAdvert', requestOptions).subscribe(response => {
        this.adverts = response['_body'].result;

        
      },
        error => {
          console.log(error);
        });
    }
  
  /*
    Onclick(id) {
      const results = [];
      for (let i = 0; i < this.equipes.length; i++) {
        if (this.equipes[i]['id'] == id) {
          results.push(this.equipes[i]);
        }
      }
      localStorage.setItem('currentequipe', JSON.stringify(results));
     this.router.navigate(['/equipes/workspace']);
  
    }
  */
  }