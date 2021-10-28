import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Product} from '../../common/product';
import { ProductService } from 'src/app/service/product.service';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  images: any = [];
  id: any;
  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) {
    this.id = route.snapshot.params['id'];
  }
  Pro: any = [];
  ngOnInit() {
    this.productService.getProById(this.id).subscribe(data =>{
      this.Pro = data as Array<Product>;
      this.product = this.Pro[0];
    });
  }
  // addtoCart(product: any){
  //   this.cartService.addtoCart(product);
  // }

}
