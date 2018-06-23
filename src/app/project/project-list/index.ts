import {Component, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';
import {NewProjectComponent} from '../new-project'
import {InviteComponent} from '../invite';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      'name': '企业平台',
      'desc': '一个协作平台',
      'img': 'assets/img/covers/0.jpg'
    },
    {
      'name': '个人平台',
      'desc': '一个协作平台2',
      'img': 'assets/img/covers/1.jpg'
    }
  ];

  constructor(private dialog: MdDialog) {
  }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {
      width: '300px',
      height: '400px',
      data: {
        isDark: false,
        title: '新建项目'
      }
    });

    // 订阅接收子组件传递过来的消息
    dialogRef.afterClosed().subscribe(res => {
      console.log(`i received : ${res}`);
    })
  }

  openInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent)
  }

  openEditDialog() {
    this.dialog.open(NewProjectComponent, {
      data: {
        title: '修改项目'
      }
    })
  }

}
