import { Component, OnInit, HostBinding } from '@angular/core';
import { routerAnim } from '../../animation/router.anim'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [routerAnim]
})
export class RegisterComponent implements OnInit {

  items: string[];
  @HostBinding('@slideToRight') routeState;

  constructor() {
  }

  ngOnInit() {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    this.items = nums.map(i => {
      return `avatars:svg-${i}`
    })
  }

}
