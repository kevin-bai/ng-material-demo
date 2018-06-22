import {NgModule} from '@angular/core';
import {SharedModule} from '../shared';
import {LoginComponent} from './login';
import {LoginRoutingModule} from './login-routing.module';
import {RegisterComponent} from './register'

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  exports: [
    LoginComponent
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class LoginModule {
}
