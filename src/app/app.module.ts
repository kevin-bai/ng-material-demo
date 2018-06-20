import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CoreModule} from './core';
import {SharedModule} from './shared';
import {MdSidenavModule} from '@angular/material'
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MdSidenavModule,
    CoreModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
