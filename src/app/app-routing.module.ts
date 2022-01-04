import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductUpdateComponent} from './product/product-update/product-update.component';
import {ProductDeleteComponent} from './product/product-delete/product-delete.component';

const routes: Routes = [
  {
    path: 'create',
    component: ProductCreateComponent
  },
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'update/:id',
    component: ProductUpdateComponent
  },
  {
    path: 'delete/:id',
    component: ProductDeleteComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
