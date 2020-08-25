import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoModule } from '@po-ui/ng-components';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoRoutingModule } from './produto-routing.module';

@NgModule({
  declarations: [ProdutoListComponent],
  imports: [CommonModule, PoModule, ProdutoRoutingModule],
})
export class ProdutoModule {}
