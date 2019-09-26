import { SellerComponent } from './components/seller/seller.component';
import { CommentComponent } from './components/comment/comment.component';
import { GoodsComponent } from './components/goods/goods.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [{
      path: 'components/goods',
      component: GoodsComponent
    },
    {
      path: 'components/seller',
      component: SellerComponent,
    },
    {
      path: 'components/comment',
      component: CommentComponent
    },
    {
      path: '',
      redirectTo: 'components/goods',
      pathMatch: 'full',
    }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
