import { Component, OnInit } from '@angular/core';
import { Router, } from '@angular/router';
import { Http } from '@angular/http';
@Component({
  selector: 'app-create-advert',
  templateUrl: './create-advert.component.html',
  styleUrls: ['./create-advert.component.css']
})
export class CreateAdvertComponent implements OnInit {
type ='';
marque='';
model='';
  constructor(private router: Router, private http: Http) {}

  createAd() {
    this.http.post('http://localhost:3000/advert/addAdvertLessUser', {  type: this.type, marque: this.marque,  model:this.model }).subscribe(response => {
      if (JSON.parse(response['_body']).result) {

        alert('Insertion avec succes');

      }
      else {

        alert('!!!! Impossible d insérer !!!!');
      } 

    });

  }
  ngOnInit() {
  }

}