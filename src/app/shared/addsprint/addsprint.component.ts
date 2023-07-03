import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-addsprint',
  templateUrl: './addsprint.component.html',
  styleUrls: ['./addsprint.component.scss']
})
export class AddsprintComponent {
  constructor(public dialogRef: MatDialogRef<AddsprintComponent>) {}

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    // Perform the save operation here
    this.dialogRef.close();
  }


}
