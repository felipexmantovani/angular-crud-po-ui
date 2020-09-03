import { NgModule } from '@angular/core';
import { PoModule } from '@po-ui/ng-components';
import { ErroPageComponent } from './erro-page/erro-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageRoutingModule } from './page-routing.module';

@NgModule({
  declarations: [ErroPageComponent, HomePageComponent],
  imports: [PageRoutingModule, PoModule]
})
export class PageModule {}
