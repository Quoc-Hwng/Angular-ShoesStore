import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyHomeComponent } from './body-home/body-home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductAllComponent } from './components/product-all/product-all.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  { path: 'productDetail/:ID_Product', component: ProductDetailComponent},
  { path: '', component: BodyHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tat-ca-san-pham', component: ProductAllComponent},
  { path: 'gio-hang', component: ProductCartComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
