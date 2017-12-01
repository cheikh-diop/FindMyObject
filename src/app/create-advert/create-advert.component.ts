import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-advert',
  templateUrl: './create-advert.component.html',
  styleUrls: ['./create-advert.component.css']
})

export class CreateAdvertComponent implements OnInit {

  advert = {};
  url = '';

  constructor(private router: Router, private http: HttpClient) { }

  createAdvert() {

    this.http.post('/advert/addAdvertLessUser', this.advert)
      .subscribe(res => {
        alert("Votre a été créé avec succés");
        console.log("RESULTAT" + res);
      }, (err) => {
        console.log(err);
      }
      );
  }

  readUrl(event: any) {

    if (event.target.files && event.target.files[0]) {

      var reader = new FileReader();
      Object.assign(this.advert, {
        "image_url": event.target.files[0].name
      });
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  ngOnInit() {
  }
}
