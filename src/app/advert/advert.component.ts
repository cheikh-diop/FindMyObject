import { Component, OnInit } from '@angular/core';
import {AdvertService } from '../advert.service';
import {Advert } from '../advert';
import { DataService } from '../data.service';
@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent implements OnInit {
 
  adverts : Advert[];
  constructor(private advertService: DataService) { }
    getUsers(): void {

      this.advertService.getUsers()
        .subscribe(adverts => this.adverts=adverts);
        
    }
  ngOnInit() {
    this.getUsers();
  }

}
