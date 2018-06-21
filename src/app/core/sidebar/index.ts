import {ChangeDetectionStrategy, Component, EventEmitter, Output, OnInit} from '@angular/core';
import {getDate} from 'date-fns';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {

  today = 'day';

  constructor() {
  }

  ngOnInit() {
    this.today = `day${getDate(new Date())}`
  }

}
