import { NgModule } from '@angular/core';
import { ProductPageModule } from './product-page.module';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [ProductPageModule, ProductRoutingModule]
})
export class ProductModule {}
