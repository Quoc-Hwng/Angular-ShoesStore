import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: 'root'
})

export class CartService {
  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([]);

  constructor(){

  }
}
