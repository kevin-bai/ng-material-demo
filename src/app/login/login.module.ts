import {NgModule} from '@angular/core';
import {SharedModule} from '../shared';
import {LoginComponent} from './login/login.component';
import {LoginRoutingModule} from './login-routing.module'

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  exports: [
    LoginComponent
  ],
  declarations: [LoginComponent]
})
export class LoginModule {
}
