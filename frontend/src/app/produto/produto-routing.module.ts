import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListComponent } from './produto-list/produto-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ProdutoListComponent,
  },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ProdutoRoutingModule {}
