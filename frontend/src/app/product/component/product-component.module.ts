import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PoModule } from '@po-ui/ng-components';
import { ProductFormComponent } from './product-form/product-form.component';

@NgModule({
  declarations: [ProductFormComponent],
  imports: [PoModule, ReactiveFormsModule],
  exports: [ProductFormComponent]
})
export class ProductComponentModule {}
