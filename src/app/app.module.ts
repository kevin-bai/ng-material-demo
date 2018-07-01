import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {CoreModule} from './core';
import {SharedModule} from './shared';
import {MdSidenavModule} from '@angular/material'
import {AppComponent} from './app.component';
import {LoginModule} from './login'
import {ProjectModule} from './project'
import {TaskModule} from "./task/task.module";
import { ServiceModule } from './service/service.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    MdSidenavModule,
    CoreModule,
    LoginModule,
    ProjectModule,
    TaskModule,
    ServiceModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
