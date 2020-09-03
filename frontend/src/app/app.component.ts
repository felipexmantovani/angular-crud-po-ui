import { Component } from '@angular/core';
import { PoMenuPanelItem } from '@po-ui/ng-components';
import { PAGE_CONFIG } from './module/page/page-module.config';
import { PRODUCT_CONFIG } from './module/product/product-module.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly menus: Array<PoMenuPanelItem> = [
    { label: 'Home', icon: 'po-icon po-icon-home', link: PAGE_CONFIG.pathFront },
    { label: 'Produtos', icon: 'po-icon po-icon-archive', link: PRODUCT_CONFIG.pathFront }
  ];
}
