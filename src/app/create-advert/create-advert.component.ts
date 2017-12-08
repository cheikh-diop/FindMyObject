import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Http, RequestOptions, Headers, URLSearchParams, ResponseContentType, Response } from '@angular/http';
@Component({
  selector: 'app-create-advert',
  templateUrl: './create-advert.component.html',
  styleUrls: ['./create-advert.component.css']
})

export class CreateAdvertComponent implements OnInit {

  advert = {};
  url = '';
  image_path = '';
  constructor(private router: Router, private http: HttpClient) { }

  createAdvert() {

    this.http.post('http://localhost:3000/advert/addAdvertLessUser', this.advert)
      .subscribe(res => {
        alert("Votre annonce a été créé avec succés");
        console.log("RESULTAT" + res);
      }, (err) => {
        console.log(err);
      }
      );
  }

  readUrl(event: any) {

    if (event.target.files && event.target.files[0]) {

      var reader = new FileReader();

      var tmppath = URL.createObjectURL(event.target.files[0]);
      Object.assign(this.advert, {
        "image_url": event.target.files[0].name
      });
      reader.onload = (event: any) => {
        this.url = event.target.result;
        Object.assign(this.advert, {
          "url": this.url
        });

      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  ngOnInit() {
  }
}