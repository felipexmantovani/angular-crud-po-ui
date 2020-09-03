import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpStatusCodeEnum } from '../shared/enum/http-status-code';
import { ErroPageComponent } from './erro-page/erro-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'erro',
    children: [
      {
        path: String(HttpStatusCodeEnum.NotFound),
        component: ErroPageComponent
      }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class PageRoutingModule {}
