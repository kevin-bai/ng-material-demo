import {NgModule} from '@angular/core';
import {SharedModule} from '../shared';
import {LoginComponent} from './login/login.component';
import {LoginRoutingModule} from './login-routing.module';
import {RegisterComponent} from './register/register.component'

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
