import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../product.service';
import {Product} from '../../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) { }

  getAllProducts(): Product[]{
    return this.productService.getAllProducts();
  }

  ngOnInit(): void {
  }

}
