import {Component, OnInit, Inject} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material'

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  title: string;

  constructor(
    @Inject(MD_DIALOG_DATA) private data,
    private dialogRef: MdDialogRef<NewProjectComponent>,
  ) {
  }

  ngOnInit() {
    this.title = this.data.title;
    console.log(JSON.stringify(this.data))
  }

  onClickHander() {
    // 向父组件回传消息
    this.dialogRef.close('i save the message');
  }
}
