import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http'
import { PaginationserviceService } from '../paginationservice.service'
import 'rxjs/add/operator/map'

import * as _ from 'underscore'
@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent implements OnInit {
  constructor(private http: Http, private pagerService: PaginationserviceService) { }

  private adverts: any[];
  // pager object
  pager: any = {};
  // paged items 
  pagedItems: any[]
  ngOnInit() {
    // get data
    this.http.get('advert')
      .map((response: Response) => response.json())
      .subscribe(data => {
        this.adverts = data;

        // initialize to page 1
        this.setPage(1);
      });
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.adverts.length, page);

    // get current page of items
    this.pagedItems = this.adverts.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }


}
