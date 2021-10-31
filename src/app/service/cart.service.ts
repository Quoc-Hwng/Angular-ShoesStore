import { Injectable } from '@angular/core';
import { CartItem } from '../common/cart';
import { Product } from '../common/product';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartItem[] = [];
  addToCart(product: Product) {
    const item = new CartItem(product,1,0);
    if(this.items.filter(item => item.product.ID_Product === product.ID_Product).length > 0)
    {
      this.items.find(item => item.product.ID_Product === product.ID_Product)!.quantity++;
      this.items.find(item => item.product.ID_Product === product.ID_Product)!.total+=product.Price;
    }
    else{
      this.items.push(item);
    }
    const jsonData = JSON.stringify(this.items)
    localStorage.setItem('myData', jsonData)
  }
  getItems() {
    return JSON.parse(localStorage.getItem('myData')!);
  }

  removeCartItem(product: CartItem) {
    this.items = this.items.filter(item => item.product.ID_Product !== product.product.ID_Product);
    // this.items.map((a: any,index:any)=>{
    //   if(product.product.ID_Product = a.ID_Product){
    //     this.items.slice(index,1);
    //   }
    // })
    this.items.splice(this.items.indexOf(product),1)
    const jsonData = JSON.stringify(this.items);
    localStorage.setItem('myData', jsonData)
  }
  clearCart() {
    this.items = [];
    localStorage.removeItem('myData')
    return this.items;
  }
constructor() { }

}
