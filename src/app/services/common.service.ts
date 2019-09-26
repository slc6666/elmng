import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  public domain: any = 'https://www.easy-mock.com/mock/5c0f194cab670b292a8eda93/elm/';

  constructor(public http: HttpClient) {


  }

  /*

    api/productlist
    http://a.itying.com/api/productlist
  */


  get() {

    return new Promise((resolve, reject) => {

      this.http.get(this.domain).subscribe((response) => {

        resolve(response);
      });

    });

  }

}
