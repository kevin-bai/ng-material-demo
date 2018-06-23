import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() item;
  avatar;
  isComplete: boolean;

  constructor() {
  }

  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned';
    this.isComplete = this.item.completed;
  }

  changeComplete() {
    this.isComplete = !this.isComplete;
  }

  onCheckboxClick(e: Event) {
    e.stopPropagation();
  }
}
