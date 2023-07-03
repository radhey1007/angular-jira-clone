import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { DialogComponent } from './dialog/dialog.component';



@NgModule({
  declarations: [
    TableComponent,
    DialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
