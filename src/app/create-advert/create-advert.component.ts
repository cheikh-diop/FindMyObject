import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component'
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
  user = {
    id:"",
    name: "",
    last_name: "",
    email: "",
    password: "",
    advert: {},
    address: {
      city: "",
      city_code: "",
      street: "",
      country: ""
    }
  }
  constructor(private router: Router, private http: HttpClient, private auth: LoginComponent) { }

  createAdvert() {
    // Si il n y a pas de connexion cela veut dire c'est un ajout d'objet trouve
    console.log("creer annonce")
    
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

  userCreateAdvert() {

    console.log("utilisateur creer annonce")
    
    this.auth.getProfile().subscribe(profile => {
      this.user = profile.user;
      alert("utilisateur "+this.user)

    },
      err => {
        console.log(err);
        return false;
      }
    )
    this.user.advert = this.advert;
    
    console.log("annonce "+JSON.stringify(this.user));
    this.http.put('http://localhost:3000/user/addUserAdvert', this.user)
      .subscribe(res => {
        alert("Votre annonce a été créé avec succés");
        console.log("RESULTAT" + res);
      }, (err) => {
        
        console.log(err);
      }
      )

  }

  ngOnInit() {
  }
}