import { ShopcartComponent } from './components/shopcart/shopcart.component';
import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { CommonService } from '../../../../services/common.service';

// tslint:disable-next-line: import-spacing
import BScroll from 'better-scroll';


@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})

export class GoodsComponent implements OnInit {
  @ViewChild('shopCart') shopCart: ShopcartComponent;
  private goods: any;
  private menuListUl: any;
  private seller: any;
  private foodsScrollCtn;
  private menuListctn;
  private Scroll;
  private foodsScroll;
  private scrollEndY = 0;
  private scrollY = 0;
  private foodListLi;
  private foodsScrollEndY;
  private totalheight0 = 0; private totalheight1;
  currentIndex: any;
  index: any;
  constructor(private el: ElementRef, public common: CommonService, ) {

  }

  ngOnInit() {

    this.common.get().then((response: any) => {
      this.goods = response.goods;
      this.seller = response.seller;
      //  console.log(this.seller);
    });
    this.menuListctn = this.el.nativeElement.querySelector('.menu-wrapper');
    this.menuListUl = this.el.nativeElement.querySelector('.menu-wrapper ul');
    this.foodsScrollCtn = this.el.nativeElement.querySelector('.foods-wrapper');
    this.initScroll();




  }

  // tslint:disable-next-line: use-life-cycle-interface
  changeHeight() {
    this.foodListLi = this.el.nativeElement.querySelectorAll('.foods-wrapper>ul>li');
  }
  selectMenu(index, $event) {

    // console.log(index + '计算出来的');
    let activeClass = this.el.nativeElement.querySelector('.menu-wrapper ul li:first-child');
    if (index !== 0) {
      activeClass.style.background = '#f3f5f7';
    } else if (index === 0) {
      activeClass.style.background = '#ffffff';
    }
    this.scrollY = $event.layerY + this.scrollEndY;
    this.caculateHeight($event, index);

    this.foodsScroll.scrollToElement(this.foodListLi[index], 300);
  }
  caculateHeight($event, index) {
    let clientHeight = $event.target.clientHeight;
    if (index !== this.currentIndex) {
      for (let index = 0; index < 9; index++) {
        let height1 = index * clientHeight;
        let height2 = (index + 1) * clientHeight;
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          this.currentIndex = index;
        }
      }
    }

  }
  cartAdd($event) {
    // console.log('接收到子组件传过来的');
    // console.log(this.goods);
    // console.log($event.target);
    // console.log(this.goods);
    this.shopCart.viewTest();
  }

  initScroll() {

    setTimeout(() => {
      this.Scroll = new BScroll(this.menuListctn,
        { scrollY: true, click: true, }
      );
      this.foodsScroll = new BScroll(this.foodsScrollCtn, {
        probeType: 3,
        click: true,
      });
      // console.log(this.Scroll.options);
      // console.log(this.foodsScroll.options);
      this.Scroll.on('scrollEnd', (pos) => {
        // console.log(pos);
        this.scrollEndY = Math.abs(Math.round(pos.y));
      });
      this.foodsScroll.on('scroll', (pos) => {
        this.foodsScrollEndY = Math.abs(Math.round(pos.y));

        for (let index = 0; index < this.foodListLi.length; index++) {
          if (index < 8) {
            let height0 = this.foodListLi[index].offsetHeight;
            let height1 = this.foodListLi[index + 1].offsetHeight;
            this.totalheight0 = this.totalheight0 + height0;
            this.totalheight1 = this.totalheight0 + height1;

            if (this.foodsScrollEndY >= this.totalheight0 && this.foodsScrollEndY <= this.totalheight1) {
              // console.log(index);
              this.currentIndex = index + 1;

              let activeClass = this.el.nativeElement.querySelector('.menu-wrapper ul li:first-child');
              activeClass.style.background = '#f3f5f7';
              // }
            } else if (this.foodsScrollEndY <= this.foodListLi[0].offsetHeight) {

              let activeClass = this.el.nativeElement.querySelector('.menu-wrapper ul li:first-child');
              activeClass.style.background = '#ffffff';
              this.currentIndex = 0;
            }
          }




        }

        this.totalheight0 = 0;
        this.totalheight1 = 0;
      });

      this.changeHeight();

    }, 800);
  }

}

