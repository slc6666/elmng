import { Component, OnInit } from '@angular/core';

import { CommonService } from '../../services/common.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public seller: any[] = [];

  public domain: any = '';
  public showDetails = false;
  constructor(public common: CommonService) {


    this.domain = this.common.domain;
  }

  ngOnInit() {


    // var api = 'api/productlist';
    this.common.get().then((response: any) => {
      // console.log(response);
      this.seller = response.seller;

    });
  }
  showDetalis() {
    this.showDetails = true;
  }
  showClose() {

    this.showDetails = false;
  }





}
