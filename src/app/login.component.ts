import { Component } from '@angular/core';
import { AppGuard } from '../guard/app.guard';
import { Router, } from '@angular/router';
import { Http } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 
  email = ' ';
  password = ' ';

  constructor(private guard: AppGuard, private rouet: Router, private http: Http){

  }
}
