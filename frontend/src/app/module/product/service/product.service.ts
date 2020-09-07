import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { CrudGenericService } from '../../../core/service/crud-generic/crud-generic.service';
import { PRODUCT_CONFIG } from '../product-module.config';
import { Product } from '../product.interface';

const API: string = `${environment.api}${PRODUCT_CONFIG.pathApi}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService extends CrudGenericService<Product> {
  constructor(public httpClient: HttpClient) {
    super(httpClient, API);
  }
}
