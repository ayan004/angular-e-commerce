import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  {
    path: 'product/:id',
    component: ProductPageComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  },
  {
    path: '',
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
