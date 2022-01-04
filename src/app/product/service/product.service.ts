import { Injectable } from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: Product[] = [
    {
      id: 1,
      name: 'Iphone13',
      description: 'Màu trắng',
      price: 35000
    },
    {
      id: 2,
      name: 'Oppo',
      description: 'Mùa Xanh',
      price: 18000
    }
  ];

  constructor() { }

  // tslint:disable-next-line:typedef
  getAllProducts() {
    return this.productList;
  }

  // tslint:disable-next-line:typedef
  createNewProduct(product){
    this.productList.push(product);
  }

  // tslint:disable-next-line:typedef
  findProductById(id: number) {
    return this.productList.find(item => item.id === id);
  }
  // tslint:disable-next-line:typedef
  deleteById(id){
    this.productList.splice(id - 1, 1);
  }

  // tslint:disable-next-line:typedef
  updateProductById(id, product){
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id === id) {
        this.productList[i] = product;
      }
    }
  }



}
