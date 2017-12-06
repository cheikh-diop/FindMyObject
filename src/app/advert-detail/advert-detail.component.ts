import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advert-detail',
  templateUrl: './advert-detail.component.html',
  styleUrls: ['./advert-detail.component.css']
})
export class AdvertDetailComponent implements OnInit {

  advert = {};
  
    constructor(private route: ActivatedRoute, private http: HttpClient) { }
  
    ngOnInit() {
      this.getAdvertDetail(this.route.snapshot.params['id']);
    }
  
    getAdvertDetail(id) {
      this.http.get('http://localhost:3000/advert/'+id).subscribe(data => {
        this.advert = data;
      });
    }

}
