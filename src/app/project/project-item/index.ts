import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input() item;
  @Output() inviteClick = new EventEmitter<void>();
  @Output() editClick = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  onInviteClick() {
    this.inviteClick.emit();
  }

  onEditClick(){
    this.editClick.emit();
  }
}
