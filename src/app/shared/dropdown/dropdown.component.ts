import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddsprintComponent } from '../addsprint/addsprint.component';


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
    const dialogRef = this.dialog.open(AddsprintComponent, {
      width: '400px',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Handle any additional logic after the dialog is closed
    });
  }

}
