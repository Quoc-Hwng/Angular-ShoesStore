import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Product} from '../../common/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(private route: ActivatedRoute) {
    if(route.snapshot.params['id'])
    this.product.ID_Product = route.snapshot.params['id'];
   }

  ngOnInit() {
  }

}
