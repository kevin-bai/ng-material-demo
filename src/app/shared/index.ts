import {NgModule} from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {DirectiveModule} from '../directive/directive.module'
import {
  MdToolbarModule,
  MdSidenavModule,
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdDatepickerModule,
  MdDialogModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdProgressBarModule,
  MdRadioModule,
  MdSelectModule,
  MdTabsModule,
  MdTooltipModule,
  MdSelectionModule,
  MdSlideToggleModule,
} from '@angular/material';



@NgModule({
  imports: [
    DirectiveModule,
    CommonModule,
    MdToolbarModule,
    MdSidenavModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdDatepickerModule,
    MdDialogModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdProgressBarModule,
    MdRadioModule,
    MdSelectModule,
    MdTabsModule,
    MdTooltipModule,
    MdSelectionModule,
    MdSlideToggleModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    DirectiveModule,
    MdToolbarModule,
    MdSidenavModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdDatepickerModule,
    MdDialogModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdProgressBarModule,
    MdRadioModule,
    MdSelectModule,
    MdTabsModule,
    MdTooltipModule,
    MdSelectionModule,
    MdSlideToggleModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    ConfirmDialogComponent
  ],

})
export class SharedModule {
}


