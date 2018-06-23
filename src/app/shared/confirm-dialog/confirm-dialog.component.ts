import {Component, OnInit, EventEmitter, Output, Inject} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <form>
      <h2 md-dialog-title>{{title}}</h2>
      <md-dialog-content>
        {{content}}
      </md-dialog-content>

      <md-dialog-actions>
        <button md-raised-button type="button" color="primary" (click)="onClickHandler(true)">确定</button>
        <button md-button md-dialog-close type="button" (click)="onClickHandler(false)">关闭</button>
      </md-dialog-actions>
    </form>
  `,
  styles: []
})
export class ConfirmDialogComponent implements OnInit {

  title: string;
  content: string;

  constructor(
    private dialogRef: MdDialogRef<ConfirmDialogComponent>,
    @Inject(MD_DIALOG_DATA) private data) {
  }

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content;
  }

  onClickHandler(result: boolean) {
    // 调用者用afterClose().subscribe接收
    this.dialogRef.close(result);
  }
}
