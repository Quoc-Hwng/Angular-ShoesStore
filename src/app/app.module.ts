import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BodyHomeComponent } from './body-home/body-home.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CarouselModule} from 'primeng/carousel';
// import { ProductService } from './productservice';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {FormsModule} from '@angular/forms';
import {ImageModule} from 'primeng/image';
import {ProductAllComponent} from './components/product-all/product-all.component';
import {LoginComponent} from './components/login/login.component';
import {CheckboxModule} from 'primeng/checkbox';
import {CategoryComponent} from './components/category/category.component';
import {SliderModule} from 'primeng/slider';
import {PanelMenuModule} from 'primeng/panelmenu';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import {GalleriaModule} from 'primeng/galleria';
import { ProductCartComponent } from './components/product-cart/product-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BodyHomeComponent,
    ProductDisplayComponent,
    ProductAllComponent,
    LoginComponent,
    CategoryComponent,
    ProductDetailComponent,
    ProductCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    NgbModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    FormsModule,
    ImageModule,
    NgbModule,
    CheckboxModule,
    SliderModule,
    PanelMenuModule,
    DropdownModule,
    DialogModule,
    HttpClientModule,
    GalleriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
