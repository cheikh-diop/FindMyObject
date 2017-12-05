import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user1 =
    {
      email: "",
      password: ""
    };



  user =
    {
      name: "",
      last_name: "",
      email: "",
      password: "",
      address: {
        city: "",
        city_code: "",
        street: "",
        country: ""


      }
    };

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {

  }
  logIn() {
    this.http.post('/user/authenticate', this.user1)
      .subscribe(res => {
        console.log(res);

      }, (err) => {

        console.log(err);
      }
      );



  }
  createUser() {

    this.http.post('/user/register', this.user)
      .subscribe(res => {
        console.log(res);

      }, (err) => {

        console.log(err);
      }
      );


  }

}
