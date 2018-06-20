import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
  `],
})
export class HeaderComponent {
  @Output() toggleSlide = new EventEmitter<void>()

  constructor() {

  }

  openSliderBar() {
    this.toggleSlide.emit();
  }
}
