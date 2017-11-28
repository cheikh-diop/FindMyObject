import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router, } from '@angular/router';

@Component({
  selector: 'app-create-advert',
  templateUrl: './create-advert.component.html',
  styleUrls: ['./create-advert.component.css']
})
export class CreateAdvertComponent implements OnInit {
  advert={};

constructor(private router: Router, private http : HttpClient) { }
  
 
InvitUser() {

  this.http.post('/advert/addAdvertLessUser', this.advert)
  .subscribe(res => {
  alert("Votre a été créé avec succés") ;  
  console.log("RESULTAT"+res);
    }, (err) => {
      console.log(err);
    }
  );




 /* this.http.post('http://localhost:3000/advert/addAdvertLessUser', { invitEmail: this.invitEmail, projectName: this.projectName }).subscribe(response => {
    if (JSON.parse(response['_body']).result) {

      alert('Insertion avec succes');

    }
    else {

      alert('!!!! Impossible d insérer !!!!');
    } 

  });*/

}


  ngOnInit() {
 /*   this.http.get('/advert').subscribe(data => {
      this.adverts = data;
    });*/
  }

  
}
