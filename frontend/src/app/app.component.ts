import { Component, OnInit } from '@angular/core';
import { PoMenuPanelItem } from '@po-ui/ng-components';
import { LoadingService } from './core/service/loading/loading.service';
import { PAGE_CONFIG } from './module/page/page-module.config';
import { PRODUCT_CONFIG } from './module/product/product-module.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  menus: Array<PoMenuPanelItem>;

  loadingShow: boolean = false;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.menus = this.getMenus();
    this.loading();
  }

  getMenus(): Array<PoMenuPanelItem> {
    return [
      { label: 'Home', icon: 'po-icon po-icon-home', link: '/' },
      { label: 'Produtos', icon: 'po-icon po-icon-archive', link: PRODUCT_CONFIG.pathFront }
    ];
  }

  loading(): void {
    this.loadingService.loading.subscribe((loading) => {
      this.loadingShow = loading;
    });
  }
}
