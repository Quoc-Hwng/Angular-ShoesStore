import { Component, OnInit } from '@angular/core';
// import { ProductService } from './productservice';
import {Product} from './../common/product';

@Component({
  selector: 'app-body-home',
  templateUrl: './body-home.component.html',
  styleUrls: ['./body-home.component.css']
})
export class BodyHomeComponent implements OnInit {
  products: Product[] = [
    new Product('P01', 'Hat','https://assets.adidas.com/images/w_600,f_auto,q_auto/7ed0855435194229a525aad6009a0497_9366/Giay_Superstar_trang_EG4958_01_standard.jpg',40,'White',10,'Male','400000','Sneaker Adidas','Adidas'),
    new Product('P02', 'Jeans','https://assets.adidas.com/images/w_600,f_auto,q_auto/7ed0855435194229a525aad6009a0497_9366/Giay_Superstar_trang_EG4958_01_standard.jpg',41,'Black',10,'Male','500000','Sneaker','Nike'),
    new Product('P02', 'Jeans','https://assets.adidas.com/images/w_600,f_auto,q_auto/7ed0855435194229a525aad6009a0497_9366/Giay_Superstar_trang_EG4958_01_standard.jpg',42,'White',10,'Male','600000','Sneaker','Puma'),
    new Product('P02', 'Jeans','https://assets.adidas.com/images/w_600,f_auto,q_auto/7ed0855435194229a525aad6009a0497_9366/Giay_Superstar_trang_EG4958_01_standard.jpg',39,'White',10,'Female','700000','Sneaker','Puma'),
  ];
  constructor() { }

  ngOnInit(): void {
  }
  items = [{ img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/7ed0855435194229a525aad6009a0497_9366/Giay_Superstar_trang_EG4958_01_standard.jpg',
          money: 20000,
          name: 'Fizh'}
]

}
// export class CarouselDemo {

//   products: Product[];

// responsiveOptions;

// constructor() {
  // this.responsiveOptions = [
  //         {
  //             breakpoint: '1024px',
  //             numVisible: 3,
  //             numScroll: 3
  //         },
  //         {
  //             breakpoint: '768px',
  //             numVisible: 2,
  //             numScroll: 2
  //         },
  //         {
  //             breakpoint: '560px',
  //             numVisible: 1,
  //             numScroll: 1
  //         }
  //     ];
  // }

// ngOnInit() {
//   // this.productService.getProductsSmall().then(products => {
//   //   this.products = products;
//   // });
//   }

//}
