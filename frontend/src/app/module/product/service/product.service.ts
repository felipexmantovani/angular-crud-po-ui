import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, take } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { PRODUCT_CONFIG } from '../product-module.config';
import { Product } from '../product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly api: string = `${environment.api}${PRODUCT_CONFIG.pathApi}`;

  constructor(private httpClient: HttpClient) {}

  create(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${this.api}`, product).pipe(take(1), delay(1000));
  }

  read(): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(`${this.api}`).pipe(take(1), delay(1000));
  }

  readById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.api}/${id}`).pipe(take(1), delay(250));
  }

  update(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.api}/${product.id}`, product).pipe(take(1), delay(1000));
  }

  delete(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${this.api}/${id}`).pipe(take(1), delay(250));
  }
}
