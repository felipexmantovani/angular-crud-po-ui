import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoNotificationService, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
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

  productsExist: boolean = true;

  columns: Array<PoTableColumn>;

  actions: Array<PoTableAction>;

  constructor(
    private router: Router,
    private productService: ProductService,
    private poNotificationService: PoNotificationService
  ) {}

  ngOnInit(): void {
    this.columns = this.getColumns();
    this.actions = this.getActions();
    this.getProducts();
  }

  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'id', label: 'ID' },
      { property: 'name', label: 'Nome' },
      { property: 'price', label: 'Preço', type: 'currency' }
    ];
  }

  getActions(): Array<PoTableAction> {
    return [
      {
        action: this.goToEdit.bind(this),
        icon: 'po-icon-edit',
        label: 'Editar'
      },
      {
        action: this.delete.bind(this),
        icon: 'po-icon-delete',
        label: 'Excluir'
      }
    ];
  }

  getProducts(): void {
    this.productService.getAll().subscribe((products) => {
      this.products = products;
      if (!this.products.length) {
        this.poNotificationService.information('Nenhum produto cadastrado!');
        this.productsExist = false;
      }
    });
  }

  goToEdit(product: Product): void {
    console.log(product);
  }

  delete(product: Product): void {
    console.log(product);
  }

  goToCreate(): void {
    this.router.navigateByUrl(`${PRODUCT_CONFIG.pathFront}/create`);
  }
}
