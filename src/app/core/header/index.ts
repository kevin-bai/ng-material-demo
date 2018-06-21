import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
  `],
})
export class HeaderComponent {
  @Output() toggleSlide = new EventEmitter<void>()
  @Output() themeToggle = new EventEmitter<boolean>()

  constructor() {

  }

  openSliderBar() {
    this.toggleSlide.emit();
  }

  themeToggleHandler(checked: boolean) {
    this.themeToggle.emit(checked)
  }
}
