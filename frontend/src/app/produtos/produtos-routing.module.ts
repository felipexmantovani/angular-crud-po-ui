import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutosListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ProdutosRoutingModule {}
