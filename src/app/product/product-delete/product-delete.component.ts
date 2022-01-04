import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';
import {Subscription} from 'rxjs';
import {ProductService} from '../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
  };
  sub: Subscription;
  id = 0;


  constructor(
    private productService: ProductService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {
    this.sub = this.activeRouter.paramMap.subscribe(
      (paramMap: ParamMap) => {
        this.id = Number(paramMap.get('id'));
        this.product = this.findProductById(this.id);
      }
    );
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  findProductById(id: number) {
    return this.productService.findProductById(id);
  }

  // tslint:disable-next-line:typedef
  deleteProduct() {
    this.productService.deleteById(this.product.id);
    this.router.navigate(['product/list']);
    alert('Update complete');
  }

}
