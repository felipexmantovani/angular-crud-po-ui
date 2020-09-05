import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpStatusCodeEnum } from '../../shared/enum/http-status-code';
import { PageErroComponent } from './page-erro/page-erro.component';
import { PageHomeComponent } from './page-home/page-home.component';

const routes: Routes = [
  {
    path: 'home',
    component: PageHomeComponent
  },
  {
    path: 'erro',
    children: [
      {
        path: String(HttpStatusCodeEnum.NotFound),
        component: PageErroComponent
      }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class PageRoutingModule {}
