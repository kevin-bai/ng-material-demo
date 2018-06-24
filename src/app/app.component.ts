import {Component, OnInit} from '@angular/core';
import {OverlayContainer} from "@angular/material";
import {trigger, state, transition, style, animate} from '@angular/animations'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger(
      'square',
      [
        state('green', style({'background': 'green'})),
        state('red', style({'background': 'red'})),
        transition('green => red', animate(1000)),
        transition('red => green', animate(1000))
      ]
    )
  ]
})
export class AppComponent {

  squareState: string;
  isDarkTheme = false;

  constructor(private oc: OverlayContainer) {
  }

  themeChange() {
    this.isDarkTheme = !this.isDarkTheme;
    this.oc.themeClass = this.isDarkTheme ? 'myapp-dark-theme' : '';
  }

  onClick() {
    this.squareState = this.squareState === 'red' ? 'green' : 'red';
  }
}
