import { Injectable } from '@angular/core';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: Product[] = [
    {
      id: 1,
      name: 'Iphone13',
      description: 'Màu trắng'
    },
    {
      id: 2,
      name: 'Oppo',
      description: 'Mùa Xanh'
    }

  ];

  constructor() { }

  getAllProducts(): Product[] {
    return this.productList;
  }

  // tslint:disable-next-line:typedef
  createNewProduct(product: Product){
    this.productList.push(product);
  }

  updateProductById(id: number, product: Product): void {
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id === id) {
        this.productList[i] = product;
      }
    }
  }

}
