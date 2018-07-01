import { QuoteService } from './quote.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule()
export class ServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServiceModule,
      providers: [
        QuoteService
      ]
    }
  }
}
