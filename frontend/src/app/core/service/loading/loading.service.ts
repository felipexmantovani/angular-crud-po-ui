import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoadingService {
  loading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}

  show(): void {
    this.loading.next(true);
  }

  hide(): void {
    this.loading.next(false);
  }
}
