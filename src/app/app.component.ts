import {Component, OnInit} from '@angular/core';
import {OverlayContainer} from "@angular/material";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDarkTheme = false;

  constructor(private oc: OverlayContainer) {
  }

  themeChange() {
    this.isDarkTheme = !this.isDarkTheme;
    this.oc.themeClass = this.isDarkTheme ? 'myapp-dark-theme' : '';
  }
}
