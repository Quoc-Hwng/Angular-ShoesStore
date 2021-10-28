import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import {Product} from './../common/product';

@Component({
  selector: 'app-body-home',
  templateUrl: './body-home.component.html',
  styleUrls: ['./body-home.component.css']
})
export class BodyHomeComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://bizweb.dktcdn.net/100/424/874/themes/817899/assets/slider_3.jpg?1634203525795`);
  products!: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(data => {
      this.products = data as Product[];
    })
  }
    // images = [944, 1011, 984].map((n) => `https://bizweb.dktcdn.net/100/424/874/themes/817899/assets/slider_3.jpg?1634203525795`);
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
