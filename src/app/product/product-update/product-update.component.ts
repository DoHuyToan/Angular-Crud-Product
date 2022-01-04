import { Component, OnInit } from '@angular/core';
import {Product} from '../../product';
import {Subscription} from 'rxjs';
import {ProductService} from '../../product.service';
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
    description: ''
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
      }
    );
  }

  updateProductById(): void {
    this.productService.updateProductById(this.id, this.product);
    alert('Update complete');
  }

}
