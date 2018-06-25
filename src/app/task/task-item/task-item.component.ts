import {Component, Input, OnInit, HostListener} from '@angular/core';
import {itemAnim} from '../../animation/item.anim'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [itemAnim]
})
export class TaskItemComponent implements OnInit {

  @Input() item;
  avatar;
  isComplete: boolean;
  itemState = 'out';

  constructor() {
  }

  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned';
    this.isComplete = this.item.completed;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.itemState = 'in';
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(e) {
    // 传入一个时间对象
    console.log(e);
    this.itemState = 'out';
  }

  changeComplete() {
    this.isComplete = !this.isComplete;
  }

  onCheckboxClick(e: Event) {
    e.stopPropagation();
  }
}
