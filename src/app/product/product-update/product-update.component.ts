import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {Subscription} from 'rxjs';
import {ProductService} from '../service/product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0
  };
  id = 0;
  sub: Subscription;
  ngOnInit(): void {
  }
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    this.sub = this.activatedRoute.paramMap.subscribe(
      (paramMap: ParamMap) => {
        this.id = Number(paramMap.get('id'));
        this.product = this.findProductById(this.id);
      }
    );
  }
  // tslint:disable-next-line:typedef
  private findProductById(id: number) {
    return this.productService.findProductById(id);
  }
  // tslint:disable-next-line:typedef
  updateProductById(){
    this.productService.updateProductById(this.product.id, this.product);
    alert('Update complete');
  }
}
