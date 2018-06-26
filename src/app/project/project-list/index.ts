import {Component, HostBinding, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {MdDialog} from '@angular/material';
import {NewProjectComponent} from '../new-project'
import {InviteComponent} from '../invite';
import {ConfirmDialogComponent} from "../../shared/confirm-dialog/confirm-dialog.component";
import {routerAnim} from '../../animation/router.anim'
import {listAnimation} from '../../animation/list.anim'

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [routerAnim, listAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent implements OnInit {

  @HostBinding('@slideToRight') routeState;

  projects = [
    {
      id: 1,
      'name': '企业平台',
      'desc': '一个协作平台',
      'img': 'assets/img/covers/0.jpg'
    },
    {
      id: 2,
      'name': '个人平台',
      'desc': '一个协作平台2',
      'img': 'assets/img/covers/1.jpg'
    }
  ];

  constructor(private dialog: MdDialog, private cd: ChangeDetectorRef) {
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
      this.projects = [...this.projects,
        {id: 3, name: '新增平台1', desc: '新增平台desc', img: 'assets/img/covers/2.jpg'},
        {id: 4, name: '新增平台2', desc: '新增平台desc', img: 'assets/img/covers/3.jpg'},
        {id: 5, name: '新增平台2', desc: '新增平台desc', img: 'assets/img/covers/3.jpg'}
      ];
      this.cd.markForCheck();
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

  openConfirmDialog(proejct) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: '删除项目',
        content: '您确认删除该项目？'
      }
    })

    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      this.projects = this.projects.filter(p => p.id !== proejct.id);
      this.cd.markForCheck();
    })
  }

}
