import { Component } from '@angular/core';

import { PoMenuPanelItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuPanelItem> = [
    { label: 'Home', icon: 'po-icon po-icon-home', link: '/' }
  ];

}
