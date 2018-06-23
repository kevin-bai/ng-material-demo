import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CoreModule} from './core';
import {SharedModule} from './shared';
import {MdSidenavModule} from '@angular/material'
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module'
import {LoginModule} from './login'
import {ProjectModule} from './project'
import {TaskModule} from "./task/task.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    MdSidenavModule,
    CoreModule,
    AppRoutingModule,
    LoginModule,
    ProjectModule,
    TaskModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
