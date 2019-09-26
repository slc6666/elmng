import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';


import { SellerComponent } from './components/seller/seller.component';
import { CommentComponent } from './components/comment/comment.component';
import { GoodsComponent } from './components/goods/goods.component';
import { ShopcartComponent } from './components/goods/components/shopcart/shopcart.component';
import { CartbuttonComponent } from './components/goods/components/cartbutton/cartbutton.component';



@NgModule({
  declarations: [SellerComponent, CommentComponent, GoodsComponent, ShopcartComponent, CartbuttonComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,


  ],
  // exports: [GoodsComponent]
})
export class HomeModule { }
