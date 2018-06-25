import {Component, HostBinding, OnInit} from '@angular/core';
import {routerAnim} from '../../animation/router.anim'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerAnim]
})
export class LoginComponent implements OnInit {

  @HostBinding('@slideToRight') routeState;

  constructor() {
  }

  ngOnInit() {
  }

}
