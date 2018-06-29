import {Component, OnInit, HostBinding} from '@angular/core';
import {MdDialog} from "@angular/material";
import {NewTaskComponent} from '../new-task/new-task.component'
import {CopyTaskComponent} from "../copy-task/copy-task.component";
import {ConfirmDialogComponent} from "../../shared/confirm-dialog/confirm-dialog.component";
import {NewTaskListComponent} from "../new-task-list/new-task-list.component";
import {routerAnim} from '../../animation/router.anim'

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [routerAnim]
})
export class TaskHomeComponent implements OnInit {

  @HostBinding('@slideToRight') routeState;

  lists = [
    {
      id: 1,
      name: '待办',
      order: 1,
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
      order: 2,
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

  openNewTaskDialog() {
    this.dialog.open(NewTaskComponent, {data: {title: '新建任务'}})
  }

  openCopyTaskDialog() {
    this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}})
  }

  openUpdateTaskDialog(task) {
    this.dialog.open(NewTaskComponent, {data: {task: task, title: '修改任务'}})
  }

  openDelConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: '删除任务',
        content: '您确认删除任务吗？'
      }
    })
    dialogRef.afterClosed().subscribe(res => {
      console.log(res)
    })
  }

  openRenameTasklistDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {
      data: {
        title: '修改任务列表名称'
      }
    })
  }

  openEditTasklistDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {
      data: {
        title: '新建任务列表'
      }
    })
    dialogRef.afterClosed().subscribe(res => {
      console.log(res)
    })
  }

  handleMove(srcData, list) {
    switch (srcData.tag) {
      case 'task-item':
        console.log(`handleMove : task-item`)
        console.log(list)
        break;
      case  'task-list':
        console.log(`handleMove : task-list`)
        const srcList = srcData.data
        const tempOrder = srcList.order
        srcList.order = list.order
        list.order = tempOrder

        break;
      default:
        break;
    }
  }

  handleQuickTask(data){
    console.log(data)

  }
}
