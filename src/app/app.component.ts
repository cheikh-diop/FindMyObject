import { Component } from '@angular/core';
import { DataService } from './data.service';
import { AdvertService } from './advert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ad: Array<any>;

  constructor(private _dataService: AdvertService) {

    this._dataService.getAdverts()
      .subscribe(res => this.ad = res);

  }

}