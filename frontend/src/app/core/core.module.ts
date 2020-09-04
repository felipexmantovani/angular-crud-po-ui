import { NgModule } from '@angular/core';
import { ExceptionService } from './service/exception/exception.service';
import { LoadingService } from './service/loading/loading.service';

@NgModule({
  providers: [ExceptionService, LoadingService]
})
export class CoreModule {}
