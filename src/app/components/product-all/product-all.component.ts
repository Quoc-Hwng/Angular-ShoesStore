import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import {Product} from '../../common/product';
import {Sort} from '../../common/sort';
@Component({
  selector: 'app-product-all',
  templateUrl: './product-all.component.html',
  styleUrls: ['./product-all.component.css']
})
export class ProductAllComponent implements OnInit {
  products!: Product[];
  sorts: Sort[];

    selectedCities: Sort;

    constructor(private productService: ProductService) {
        this.sorts = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }

  ngOnInit() {
    this.productService.getAll().subscribe(data => {
      this.products = data as Product[];
    })
  }

}
