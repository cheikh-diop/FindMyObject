import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent implements OnInit {
  adverts : any
  constructor(private http : HttpClient) { }
  ngOnInit() {
    this.http.get('/advert').subscribe(data => {
      this.adverts = data;
    });
  }
}
