import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoNotificationService } from '@po-ui/ng-components';
import { ExceptionService } from '../../../../core/service/exception/exception.service';
import { LoadingService } from '../../../../core/service/loading/loading.service';
import { PRODUCT_CONFIG } from '../../product-module.config';
import { Product } from '../../product.interface';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  form: FormGroup;

  @Input()
  product: Product;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productService: ProductService,
    private poNotificationService: PoNotificationService,
    private exceptionService: ExceptionService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group({
      id: new FormControl(),
      name: new FormControl(undefined, Validators.required),
      price: new FormControl(undefined, Validators.required)
    });

    if (this.product) {
      this.formLoad();
    }
  }

  formLoad(): void {
    this.form.patchValue(this.product);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.poNotificationService.error('Verifique o formulário!');
      for (const control in this.form.controls) {
        if (this.form.get(control).invalid) {
          this.form.get(control).markAsDirty();
        }
      }
      return;
    }
    this.product = this.form.value;
    !this.product.id ? this.create() : this.update();
  }

  create(): void {
    this.loadingService.show();
    this.productService.create(this.product).subscribe(
      (product) => {
        this.poNotificationService.success(`${product.name} cadastrado(a) com sucesso!`);
        this.navigateToListProducts();
      },
      (error) => {
        this.loadingService.hide();
        this.exceptionService.handleError(error);
      },
      () => this.loadingService.hide()
    );
  }

  update(): void {
    this.loadingService.show();
    this.productService.update(this.product).subscribe(
      (product) => {
        this.poNotificationService.success(`${product.name} editado(a) com sucesso!`);
        this.navigateToListProducts();
      },
      (error) => {
        this.loadingService.hide();
        this.exceptionService.handleError(error);
      },
      () => this.loadingService.hide()
    );
  }

  navigateToListProducts(): void {
    this.router.navigateByUrl(`${PRODUCT_CONFIG.pathFront}/list`);
  }
}
