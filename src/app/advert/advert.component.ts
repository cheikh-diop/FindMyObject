import { Component, OnInit } from '@angular/core';
import {AdvertService } from '../advert.service';
import {Advert } from '../advert';
@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent implements OnInit {
  adverts : Advert[];
  constructor(private advertService: AdvertService) { }
    getAdverts(): void {

      this.advertService.getAdverts()
        .subscribe(adverts => this.adverts=adverts);
    }
  ngOnInit() {
    this.getAdverts();
  }

}
