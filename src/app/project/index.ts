import {NgModule} from '@angular/core';
import {SharedModule} from '../shared';
import {ProjectListComponent} from './project-list';
import {ProjectItemComponent} from './project-item';
import {NewProjectComponent} from './new-project';
import {InviteComponent} from './invite';
import {ProjectRoutingModule} from './project-routing.module'
import {ConfirmDialogComponent} from "../shared/confirm-dialog/confirm-dialog.component";

@NgModule({
  imports: [
    SharedModule,
    ProjectRoutingModule
  ],
  declarations: [
    ProjectListComponent,
    ProjectItemComponent,
    NewProjectComponent,
    InviteComponent
  ],
  entryComponents: [
    NewProjectComponent,
    InviteComponent,
    ConfirmDialogComponent
  ]
})
export class ProjectModule {
}
