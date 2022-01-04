import { Component, OnInit } from '@angular/core';
import {Product} from '../../product';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    id: 0,
    name: '',
    description: ''
  };

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  createNewProduct(){
    this.productService.createNewProduct(this.product);
  }

}
