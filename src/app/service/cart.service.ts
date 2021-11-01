import { Injectable } from '@angular/core';
import { CartItem } from '../common/cart';
import { Product } from '../common/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // items: CartItem[] = [];

  // addToCart(product: Product) {
  //   const item = new CartItem(product,1,0);
  //   if(this.items.filter(item => item.product.ID_Product === product.ID_Product).length > 0)
  //   {
  //     this.items.find(item => item.product.ID_Product === product.ID_Product)!.quantity++;
  //     this.items.find(item => item.product.ID_Product === product.ID_Product)!.total+=product.Price;
  //   }
  //   else{
  //     this.items.push(item);
  //   }
  //   const jsonData = JSON.stringify(this.items)
  //   localStorage.setItem('myData', jsonData)
  // }
  // getItems() {
  //   return JSON.parse(localStorage.getItem('myData')!);
  // }

  // removeCartItem(product: CartItem) {
  //   this.items = this.items.filter(item => item.product.ID_Product !== product.product.ID_Product);
  //   // this.items.map((a: any,index:any)=>{
  //   //   if(product.product.ID_Product = a.ID_Product){
  //   //     this.items.slice(index,1);
  //   //   }
  //   // })
  //   this.items.splice(this.items.indexOf(product),1)
  //   const jsonData = JSON.stringify(this.items);
  //   localStorage.setItem('myData', jsonData)
  // }
  // clearCart() {
  //   this.items = [];
  //   localStorage.removeItem('myData')
  //   return this.items;
  // }

  public cartItemList : CartItem[] =[];
  public productList = new BehaviorSubject<any>([]);

  constructor() {}
  getProducts(){
    const dataCart = JSON.parse(localStorage.getItem('myData')!);
    this.productList.next(dataCart);
    return this.productList.asObservable();
  }

  setProduct(product : Product){
    this.cartItemList.push(new CartItem(product,1,product.Price));
    this.productList.next(product);
  }
  addtoCart(product : Product, quantity: number){
    if(this.cartItemList.filter(item => item.product.ID_Product === product.ID_Product).length > 0)
    {
      this.cartItemList.find(item => item.product.ID_Product === product.ID_Product)!.quantity=quantity;
      this.cartItemList.find(item => item.product.ID_Product === product.ID_Product)!.total=quantity * product.Price;
    }
    else{
    this.cartItemList.push(new CartItem(product,quantity,product.Price));
    this.productList.next(this.cartItemList);
    }
    this.getTotalPrice();
    console.log(this.cartItemList);
    const jsonData = JSON.stringify(this.cartItemList)
    localStorage.setItem('myData', jsonData)
  }
  addfromDetail(product : Product, quantity: number){
    if(this.cartItemList.filter(item => item.product.ID_Product === product.ID_Product).length > 0)
    {
      this.cartItemList.find(item => item.product.ID_Product === product.ID_Product)!.quantity+=quantity;
      this.cartItemList.find(item => item.product.ID_Product === product.ID_Product)!.total+=quantity * product.Price;
    }
    else{
    this.cartItemList.push(new CartItem(product,quantity,product.Price));
    this.productList.next(this.cartItemList);
    }
    this.getTotalPrice();
    console.log(this.cartItemList);
    const jsonData = JSON.stringify(this.cartItemList)
    localStorage.setItem('myData', jsonData)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
    const jsonData = JSON.stringify(this.cartItemList);
    localStorage.setItem('myData', jsonData)
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
    localStorage.removeItem('myData');
  }

}
