import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './page/product-create/product-create.component';
import { ProductListComponent } from './page/product-list/product-list.component';
import { ProductUpdateComponent } from './page/product-update/product-update.component';

const routes: Routes = [
  {
    path: 'list',
    component: ProductListComponent
  },
  {
    path: 'create',
    component: ProductCreateComponent
  },
  {
    path: 'update/:id',
    component: ProductUpdateComponent
  },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class ProductRoutingModule {}
