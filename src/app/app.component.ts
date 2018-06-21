import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDark = false;

  constructor() {
  }

  themeChange() {
    this.isDark = !this.isDark;
  }
}
