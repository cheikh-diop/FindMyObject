import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { last } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  
  user = 
  { name :"",
    last_name:"",
    email : "",
    password :"",
    address : {
      city : "",
      city_code :"",
      street :"",
      country :""


    }
      };
  
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    
  }
  logIn(){

    
  }
  createUser() {
  
    this.http.post('/user/', this.user)
      .subscribe(res => {
        console.log(res);

      }, (err) => {

        console.log(err);
      }
      );


  }

}
