import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

  items = this.cartService.getItems();

  constructor(private cartService: CartService) { }
  removeItem(item: CartItem){
    this.cartService.removeCartItem(item);
    item = this.cartService.getItems();
    window.location.reload;
  }
  ngOnInit() {
  }

}
