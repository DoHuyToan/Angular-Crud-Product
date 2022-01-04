import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';
import {Product} from '../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product [] = [];

  constructor(private productService: ProductService) { }

  // tslint:disable-next-line:typedef
  getAllProducts() {
    this.productList =  this.productService.getAllProducts();
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getAllProducts();
  }

}
