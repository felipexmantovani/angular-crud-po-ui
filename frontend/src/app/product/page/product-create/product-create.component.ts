import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoNotificationService } from '@po-ui/ng-components';
import { PRODUCT_CONFIG } from '../../product-module.config';
import { Product } from '../../product.interface';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  form: FormGroup;

  product: Product;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
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

    this.productService.create(this.product).subscribe((product) => {
      this.poNotificationService.success(`${product.name} cadastrado(a) com sucesso!`);
      this.navigateToListProducts();
    });
  }

  navigateToListProducts(): void {
    this.router.navigateByUrl(`${PRODUCT_CONFIG.pathFront}/list`);
  }
}
