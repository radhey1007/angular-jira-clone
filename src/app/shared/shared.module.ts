import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { DialogComponent } from './dialog/dialog.component';
import { MaterialModule } from '../material.module';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AddsprintComponent } from './addsprint/addsprint.component';
import { AddissueComponent } from './addissue/addissue.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TableComponent,
    DialogComponent,
    DropdownComponent,
    AddsprintComponent,
    AddissueComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    TableComponent,
    DialogComponent,
    DropdownComponent
  ]
})
export class SharedModule { }
