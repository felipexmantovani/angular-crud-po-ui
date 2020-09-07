import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../product.interface';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  product$: Observable<Product>;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    if (id) {
      this.getProduct(id);
    }
  }

  getProduct(id: number): void {
    this.product$ = this.productService.readById(id);
  }
}
