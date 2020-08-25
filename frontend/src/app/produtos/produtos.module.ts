import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoModule } from '@po-ui/ng-components';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';
import { ProdutosRoutingModule } from './produtos-routing.module';

@NgModule({
  declarations: [ProdutosListComponent],
  imports: [CommonModule, PoModule, ProdutosRoutingModule],
})
export class ProdutosModule {}
