import {Component, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';
import {NewProjectComponent} from '../new-project/new-project.component'

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
    this.dialog.open(NewProjectComponent, {width: '300px', height: '400px', data: 'this is data sent'})
  }

}
