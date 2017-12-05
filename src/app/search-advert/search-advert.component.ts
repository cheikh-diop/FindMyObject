import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-advert',
  templateUrl: './search-advert.component.html',
  styleUrls: ['./search-advert.component.css']
})
export class SearchAdvertComponent implements OnInit {
  adverts :any;
 
  constructor(private http: HttpClient) {}


  createAdvert() {
    this.http.get('/advert/search').subscribe(data => {
      this.adverts = data;
    });
    alert( this.adverts);
  }

  ngOnInit() {
  /*  this.http.get('/advert/search').subscribe(data => {
      this.adverts = data;
    });
    alert( this.adverts);*/
  }

}
