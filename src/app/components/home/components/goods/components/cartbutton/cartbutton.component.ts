import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-cartbutton',
  templateUrl: './cartbutton.component.html',
  styleUrls: ['./cartbutton.component.scss']
})
export class CartbuttonComponent implements OnInit {
  @Input() food;
  @Output() private outer = new EventEmitter<any>();

  constructor() {

  }

  ngOnInit() {
  }

  addButton($event) {
    //  console.log($event);

    // if (!$event._constructed) { // 去掉自带的click事件点击，即pc端直接返回
    //   return;
    // } else {
    if (!this.food.count) {
      this.food.count = 1;

    } else {
      this.food.count++;
      // console.log(this.food.count);
    }
    this.outer.emit($event);

    // }


  }
  decreaseButton(obj, $event?) {

    // console.log('触发一次--');
    // if (!$event._constructed) { // 去掉自带的click事件点击，即pc端直接返回
    //   return;
    // }
    if (this.food.count) {
      this.food.count--;
      // console.log(this.food.count);
    }
    if (obj === 1) {
      console.log(this.food);

      // this.food.forEach(element => {
      //   element.count = 0;
      // });
    }
    this.outer.emit($event);
  }
}
