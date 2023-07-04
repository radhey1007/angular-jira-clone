import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { SprintInterface } from 'src/app/dashboard/Interfaces/sprint.interface';
import { SharedService } from '../shared.services';




@Component({
  selector: 'app-addsprint',
  templateUrl: './addsprint.component.html',
  styleUrls: ['./addsprint.component.scss'],
  providers: [DatePipe] 
})
export class AddsprintComponent {
 
  addsprintForm!:FormGroup<any>;
  isInputReadonly: boolean = true;


  constructor(public dialogRef: MatDialogRef<AddsprintComponent>, private formBuilder: FormBuilder,
    private datePipe: DatePipe,private sharedService:SharedService) {}

  ngOnInit() {
    this.addsprintForm = this.formBuilder.group({
      title: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      isActive: ['', Validators.required],
      status: ['Not Started', Validators.required]
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

   onSubmit() {
    if (this.addsprintForm.valid) {
      console.log(this.addsprintForm.value);
      const startDate :any = this.formatDate(this.addsprintForm.value.startDate);
      const endDate :any =  this.formatDate(this.addsprintForm.value.endDate); 
      let data:SprintInterface = {        
        id: Math.floor(Math.random() * 900) + 100,
        title:this.addsprintForm.value.title,
        startDate:startDate,
        endtDate:endDate,
        isActive:this.addsprintForm.value.isActive,
        status:this.addsprintForm.value.status      
      }
      this.sharedService.postSprint(data).subscribe((res:any)=> {
        if(res){
          this.cancel();
          console.log(res);
          alert("Sprint Added Successfully");
        }
      },err=> {
        console.log(err);
      })
    } else {
     alert('Please fill all the field');
    } 
  }

  formatDate(date: Date) {
    return this.datePipe.transform(date, 'dd/MM/yyyy');
  }


}
