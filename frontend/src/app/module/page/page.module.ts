import { NgModule } from '@angular/core';
import { PoModule } from '@po-ui/ng-components';
import { PageErroComponent } from './page-erro/page-erro.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageRoutingModule } from './page-routing.module';

@NgModule({
  declarations: [PageErroComponent, PageHomeComponent],
  imports: [PageRoutingModule, PoModule]
})
export class PageModule {}
