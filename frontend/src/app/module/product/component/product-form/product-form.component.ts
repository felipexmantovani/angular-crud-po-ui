import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoNotificationService } from '@po-ui/ng-components';
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
    private poNotificationService: PoNotificationService
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

    this.product ? this.formLoad() : undefined;
  }

  formLoad(): void {
    this.form.patchValue(this.product);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.poNotificationService.error('Verifique o formulário!');
      for (let control in this.form.controls) {
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
    this.productService.create(this.product).subscribe((product) => {
      this.poNotificationService.success(`${product.name} cadastrado(a) com sucesso!`);
      this.navigateToListProducts();
    });
  }

  update(): void {
    this.productService.update(this.product).subscribe(
      (product) => {
        this.poNotificationService.success(`${product.name} editado(a) com sucesso!`);
        this.navigateToListProducts();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  navigateToListProducts(): void {
    this.router.navigateByUrl(`${PRODUCT_CONFIG.pathFront}/list`);
  }
}
