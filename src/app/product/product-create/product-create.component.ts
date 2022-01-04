import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {ProductService} from '../service/product.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    description: new FormControl(),
    price: new FormControl()
  });

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  submit(){
    const product = this.productForm.value;
    this.productService.createNewProduct(product);
    this.productForm.reset();
  }
}
