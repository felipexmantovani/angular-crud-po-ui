import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoNotificationService } from '@po-ui/ng-components';
import { ExceptionService } from '../../../../core/service/exception/exception.service';
import { PRODUCT_CONFIG } from '../../product-module.config';
import { Product } from '../../product.interface';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  product: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private poNotificationService: PoNotificationService,
    private exceptionService: ExceptionService
  ) {}

  ngOnInit(): void {
    let { id } = this.activatedRoute.snapshot.params;
    id ? this.getProduct(id) : undefined;
  }

  getProduct(id: number): void {
    this.productService.readById(id).subscribe(
      (product) => {
        this.product = product;
        if (!this.product.id) {
          this.poNotificationService.error('Produto não encontrado!');
          this.router.navigateByUrl(PRODUCT_CONFIG.pathFront);
        }
      },
      (error) => {
        this.exceptionService.handleError(error);
      }
    );
  }
}
