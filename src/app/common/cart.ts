import { Product } from "./product";

export class CartItem{
  product : Product;
  quantity : number;
  total : number;
  constructor(product : Product, quantity : number, total : number){
    this.product = product;
    this.quantity = quantity;
    this.total = quantity * this.product.Price;
  }
}
