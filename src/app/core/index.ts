import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import 'hammerjs'
import 'rxjs/add/operator/take'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import '../utils/debug.util'

import { AppRoutingModule } from '../app-routing.module'
import { loadSvgResources } from '../utils/svg.util'
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { SidebarComponent } from './sidebar';
import { PageNotFoundComponent } from './page-not-found';

@NgModule({
  imports: [
    SharedModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AppRoutingModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PageNotFoundComponent,
  ],
  providers: [
    {
      provide: 'BASE_CONFIG',
      useValue: {
        uri: 'http://localhost:3000'
      }
    }
  ]
})
export class CoreModule {

  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule,
    ir: MdIconRegistry,
    ds: DomSanitizer
  ) {

    if (parentModule) {
      throw new Error('CoreModule 已经装载，请仅在 AppModule 中引入该模块。');
    }
    loadSvgResources(ir, ds)
  }
}
