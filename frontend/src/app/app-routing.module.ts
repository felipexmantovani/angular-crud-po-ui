import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PAGE_CONFIG } from './page/page-module.config';
import { PRODUCT_CONFIG } from './product/product-module.config';
import { HttpStatusCodeEnum } from './shared/enum/http-status-code';

const routes: Routes = [
  {
    path: PAGE_CONFIG.path,
    loadChildren: () => import('./page/page.module').then((m) => m.PageModule)
  },
  {
    path: PRODUCT_CONFIG.path,
    loadChildren: () => import('./product/product.module').then((m) => m.ProductModule)
  },
  { path: '', redirectTo: PAGE_CONFIG.path, pathMatch: 'full' },
  { path: '**', redirectTo: `${PAGE_CONFIG.path}/erro/${HttpStatusCodeEnum.NotFound}`, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
