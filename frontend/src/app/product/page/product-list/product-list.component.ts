import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoNotificationService, PoTableColumn } from '@po-ui/ng-components';
import { PRODUCT_CONFIG } from '../../product-module.config';
import { Product } from '../../product.interface';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;

  existProducts: boolean = true;

  columns: Array<PoTableColumn>;

  constructor(
    private router: Router,
    private productService: ProductService,
    private poNotificationService: PoNotificationService
  ) {}

  ngOnInit(): void {
    this.columns = this.getColumns();
    this.productsGet();
  }

  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'id', label: 'ID' },
      { property: 'name', label: 'Nome' },
      { property: 'price', label: 'Preço', type: 'currency' }
    ];
  }

  productsGet(): void {
    this.productService.getAll().subscribe((products) => {
      this.products = products;
      if (!this.products.length) {
        this.poNotificationService.information('Nenhum produto cadastrado!');
        this.existProducts = false;
      }
    });
  }

  navigateToCreate(): void {
    this.router.navigateByUrl(`${PRODUCT_CONFIG.pathFront}/create`);
  }
}
