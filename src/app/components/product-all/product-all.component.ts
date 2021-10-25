import { Component, OnInit } from '@angular/core';
import {Product} from '../../common/product';
import {Sort} from '../../common/sort';
@Component({
  selector: 'app-product-all',
  templateUrl: './product-all.component.html',
  styleUrls: ['./product-all.component.css']
})
export class ProductAllComponent implements OnInit {

  products: Product[] = [
    new Product('S01', 'Shoes','https://assets.adidas.com/images/w_600,f_auto,q_auto/7ed0855435194229a525aad6009a0497_9366/Giay_Superstar_trang_EG4958_01_standard.jpg',40,'White',10,'Male','400000','Sneaker Adidas','Adidas'),
    new Product('S02', 'Whale','https://assets.adidas.com/images/w_600,f_auto,q_auto/7ed0855435194229a525aad6009a0497_9366/Giay_Superstar_trang_EG4958_01_standard.jpg',41,'Black',10,'Male','500000','Sneaker','Nike'),
    new Product('S02', 'Schrimp','https://assets.adidas.com/images/w_600,f_auto,q_auto/7ed0855435194229a525aad6009a0497_9366/Giay_Superstar_trang_EG4958_01_standard.jpg',42,'White',10,'Male','600000','Sneaker','Puma'),
    new Product('S02', 'Fizh','https://assets.adidas.com/images/w_600,f_auto,q_auto/7ed0855435194229a525aad6009a0497_9366/Giay_Superstar_trang_EG4958_01_standard.jpg',39,'White',10,'Female','700000','Sneaker','Puma'),
    new Product('S02', 'Fizh','https://assets.adidas.com/images/w_600,f_auto,q_auto/7ed0855435194229a525aad6009a0497_9366/Giay_Superstar_trang_EG4958_01_standard.jpg',39,'White',10,'Female','700000','Sneaker','Puma'),
  ];
  sorts: Sort[];

    selectedCities: Sort;

    constructor() {
        this.sorts = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }

  ngOnInit() {
  }

}
