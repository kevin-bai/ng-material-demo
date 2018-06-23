import {Component, OnInit} from '@angular/core';
import {MdDialog} from "@angular/material";
import {NewTaskComponent} from '../new-task/new-task.component'

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务一:去星巴克买杯咖啡',
          completed: true,
          priority: 1,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date()
        },
        {
          id: 2,
          desc: '任务二:洗澡',
          priority: 2,
          owner: {
            id: 2,
            name: '李四',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date()
        }
      ]
    },
    {
      id: 2,
      name: '进行中',
      completed: false,
      tasks: [
        {
          id: 3,
          desc: '任务五:去鸿基影城看电影',
          priority: 3,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date()
        },
        {
          id: 4,
          desc: '任务六:吃饭吃饭吃饭吃饭吃饭吃饭吃饭吃饭阿姆斯特朗回旋',
          completed: true,
          priority: 1,
          owner: {
            id: 2,
            name: '李四',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date()
        }
      ]
    }
  ]

  constructor(private dialog: MdDialog) {
  }

  ngOnInit() {
  }

  openNewTakDialog() {
    this.dialog.open(NewTaskComponent)
  }
}
