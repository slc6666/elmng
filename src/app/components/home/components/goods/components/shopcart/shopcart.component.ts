import { element } from 'protractor';
import { CartbuttonComponent } from './../cartbutton/cartbutton.component';
import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

import BScroll from 'better-scroll';
@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.scss']
})
export class ShopcartComponent implements OnInit {
  @ViewChild('cartButton') cartButton: CartbuttonComponent;
  @Input() seller;
  @Input() goods;
  private foods: any = '';
  totalprice;
  totalcount;
  paydesc;
  payclass;
  listshow: boolean = true;
  listScroll;
  // show: boolean;
  minPrice = 20;
  fold: boolean = true;
  constructor(private el: ElementRef, ) {


  }

  ngOnInit() {

    // setTimeout(() => {
    //   this.totalPrice();
    //   this.totalCount();
    //   this.payDesc();
    //   this.payClass();
    //   this.listShow();
    // }, 1000);
  }
  selectFoods() {

    const foods: any[] = [];

    this.goods.forEach((good) => {
      good.foods.forEach((food) => {
        if (food.count) {
          foods.push(food);
        }
      });
    });
    this.foods = foods; //  将父组件传过来的foods进行计算出并且来值赋给该页面的foods
    this.totalPrice();
    this.totalCount();
    this.payDesc();
    this.payClass();
    this.listShow();

    // this.listScroll.querySelector('div.shopcart-list');

    // console.log(this.listScroll.querySelector('div:last-child'));


    return foods;
  }
  viewTest() {
    setTimeout(() => {
      this.selectFoods();
    }, 100);
  }
  toggleList() {
    // this.$emit("mask");
    if (!this.totalcount) {
      return;
    } else {
      this.listshow = !this.listshow;
    }
  }
  totalPrice() {
    let total = 0;

    // console.log(this.foods[0]);

    this.foods.forEach((item) => {
      total += item.price * item.count;
    });

    this.totalprice = total;
    console.log(this.totalprice + '这个是总价格');
  }
  totalCount() {
    let count = 0;
    this.foods.forEach((food) => {
      count += food.count;
    });

    this.totalcount = count;
    console.log(this.totalcount + '这个是总数量');

  }
  payDesc() {
    if (this.totalprice === 0) {
      this.paydesc = `￥${this.minPrice}元起送`;
    } else if (this.totalprice < this.minPrice) {
      const diff = this.minPrice - this.totalprice;
      this.paydesc = `还差￥${diff}元起送`;
    } else {
      this.paydesc = '去结算';
    }
  }
  payClass() {


    if (this.totalprice < this.minPrice) {
      this.payclass = 'not-enough';
    } else {
      this.payclass = 'enough';
    }
  }
  listShow() {
    if (this.totalcount === 0 || this.totalcount === undefined) {
      //  this.fold = true;
      this.listshow = true;
    }
    // const show = !this.fold;
    // let scroll;
    this.listScroll = this.el.nativeElement.querySelector('.shopcart-container>div:nth-child(3)>div:nth-child(2)');

  }
  clearFoods() {
    console.log(this.selectFoods());
    // tslint:disable-next-line: no-shadowed-variable
    this.selectFoods().forEach(element => {
      // console.log(element.count);
      element.count = 0;
    });

    // this.cartButton.decreaseButton(1);
    this.toggleList();
    this.selectFoods();
  }
}
