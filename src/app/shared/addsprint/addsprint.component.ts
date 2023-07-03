import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-addsprint',
  templateUrl: './addsprint.component.html',
  styleUrls: ['./addsprint.component.scss']
})
export class AddsprintComponent {
  // addsprintForm!: FormGroup<{ title: FormControl<string | null>; startDate: FormControl<string | null>;
  //   isActive: FormControl<boolean>; endDate: FormControl<string | null>; status: FormControl<string | null>; }>;
  addsprintForm!:FormGroup<any>;

  constructor(public dialogRef: MatDialogRef<AddsprintComponent>, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addsprintForm = this.formBuilder.group({
      title: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      isActive: [false, Validators.required],
      status: ['', Validators.required]
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    // Perform the save operation here
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.addsprintForm.valid) {
      const title :any = this.addsprintForm.controls['title'].value;
      const startDate :any = this.addsprintForm.controls['startDate'].value;      
    } else {
      console.log('Please fill all the field');
    } 
  }


}
