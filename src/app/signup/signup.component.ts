import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user= {}
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
  saveUser() {
    this.http.post('/user',this.user)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/advert',id])
      }), (err) => {
        console.log(err);
      }

  }

}
