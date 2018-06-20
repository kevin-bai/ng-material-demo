import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from '../shared';
import {MdToolbarModule, MdIconModule, MdButtonModule} from '@angular/material'
import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

import {loadSvgResources} from '../utils/svg.util'
import {HeaderComponent} from './header';
import {FooterComponent} from './footer';
import {SidebarComponent} from './sidebar';
import {PageNotFoundComponent} from './page-not-found';

@NgModule({
  imports: [
    SharedModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PageNotFoundComponent,
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
