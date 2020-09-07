import { NgModule } from '@angular/core';
import { CrudGenericService } from './service/crud-generic/crud-generic.service';
import { ExceptionService } from './service/exception/exception.service';
import { LoadingService } from './service/loading/loading.service';

@NgModule({
  providers: [CrudGenericService, ExceptionService, LoadingService]
})
export class CoreModule {}
