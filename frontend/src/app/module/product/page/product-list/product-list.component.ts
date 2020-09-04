import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoDialogConfirmOptions, PoDialogService, PoNotificationService, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { ExceptionService } from '../../../../core/service/exception/exception.service';
import { LoadingService } from '../../../../core/service/loading/loading.service';
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
    private poNotificationService: PoNotificationService,
    private poDialogService: PoDialogService,
    private exceptionService: ExceptionService,
    private loadingService: LoadingService
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
    this.products = new Array<Product>();
    this.productService.read().subscribe(
      (products) => {
        this.products = products;
        if (!this.products.length) {
          this.poNotificationService.information('Nenhum produto cadastrado!');
          this.productsExist = false;
        }
      },
      (error) => {
        this.exceptionService.handleError(error);
      }
    );
  }

  goToCreate(): void {
    this.router.navigateByUrl(`${PRODUCT_CONFIG.pathFront}/create`);
  }

  goToEdit(product: Product): void {
    this.router.navigateByUrl(`${PRODUCT_CONFIG.pathFront}/update/${product.id}`);
  }

  delete(product: Product): void {
    let options: PoDialogConfirmOptions = {
      title: 'Atenção!',
      message: `Realmente deseja excluir o produto ${product.name}?`,
      confirm: () => {
        this.loadingService.show();
        this.productService.delete(product.id).subscribe(
          () => {
            this.poNotificationService.success('Produto excluído com sucesso!');
            this.getProducts();
          },
          (error) => {
            this.loadingService.hide();
            this.exceptionService.handleError(error);
          },
          () => this.loadingService.hide()
        );
      }
    };
    this.poDialogService.confirm(options);
  }
}
