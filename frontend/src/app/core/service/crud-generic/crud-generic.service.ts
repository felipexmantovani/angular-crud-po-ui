import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, take } from 'rxjs/operators';

@Injectable()
export class CrudGenericService<T> {
  constructor(public httpClient: HttpClient, public api: string) {}

  create(object: T): Observable<T> {
    return this.httpClient.post<T>(`${this.api}`, object).pipe(take(1), delay(500));
  }

  read(): Observable<Array<T>> {
    return this.httpClient.get<Array<T>>(`${this.api}`).pipe(take(1), delay(500));
  }

  readById(id: number): Observable<T> {
    return this.httpClient.get<T>(`${this.api}/${id}`).pipe(take(1), delay(250));
  }

  update(object: T): Observable<T> {
    return this.httpClient.put<T>(`${this.api}/${object['id']}`, object).pipe(take(1), delay(500));
  }

  delete(id: number): Observable<T> {
    return this.httpClient.delete<T>(`${this.api}/${id}`).pipe(take(1), delay(250));
  }
}
