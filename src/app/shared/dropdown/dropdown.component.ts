import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddsprintComponent } from '../addsprint/addsprint.component';
import { AddissueComponent } from '../addissue/addissue.component';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  options = [
    { value: 'addSprint', label: 'Create New Sprint' },
    { value: 'addIssue', label: 'Create new Issue' }
  ];

  constructor(private dialog: MatDialog) {}



  openDialog(event:any): void {
    console.log(event);
    let type = event.value;
    let componentName:any = AddsprintComponent;
    if(type==="addIssue"){
      componentName = AddissueComponent
    }
    const dialogRef = this.dialog.open(componentName, {
      width: '650px',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Handle any additional logic after the dialog is closed
    });
  }

}
