import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PoModule } from '@po-ui/ng-components';
import { ProductCreateComponent } from './page/product-create/product-create.component';
import { ProductListComponent } from './page/product-list/product-list.component';

@NgModule({
  declarations: [ProductListComponent, ProductCreateComponent],
  imports: [CommonModule, ReactiveFormsModule, PoModule]
})
export class ProductPageModule {}
