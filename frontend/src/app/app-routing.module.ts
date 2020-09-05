import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PRODUCT_CONFIG } from './module/product/product-module.config';
import { HttpStatusCodeEnum } from './shared/enum/http-status-code';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./module/page/page.module').then((m) => m.PageModule)
  },
  {
    path: PRODUCT_CONFIG.path,
    loadChildren: () => import('./module/product/product.module').then((m) => m.ProductModule)
  },
  { path: '**', redirectTo: `/erro/${HttpStatusCodeEnum.NotFound}`, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
