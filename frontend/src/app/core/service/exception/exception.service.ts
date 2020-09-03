import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, ErrorHandler } from '@angular/core';
import { PoNotificationService } from '@po-ui/ng-components';
import { HttpStatusCodeEnum } from '../../../shared/enum/http-status-code';

@Injectable()
export class ExceptionService implements ErrorHandler {
  constructor(private poNotificationService: PoNotificationService) {}

  handleError(error: any): void {
    if (error instanceof HttpErrorResponse) {
      if (error.status === HttpStatusCodeEnum.NotFound) {
        this.poNotificationService.error(`#${HttpStatusCodeEnum.NotFound} - Servidor encontra-se indisponível!`);
      } else if (error.status === HttpStatusCodeEnum.InternalServerError) {
        this.poNotificationService.error(`#${HttpStatusCodeEnum.NotFound} - Houve um erro interno no servidor!`);
      }
      return;
    }
    this.poNotificationService.error('Servidor encontra-se indisponível!');
  }
}
