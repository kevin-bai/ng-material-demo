import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CoreModule} from './core';
import {SharedModule} from './shared';
import {MdSidenavModule} from '@angular/material'
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module'
import {LoginModule} from './login/login.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MdSidenavModule,
    CoreModule,
    LoginModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
