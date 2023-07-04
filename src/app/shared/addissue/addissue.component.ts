import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SharedService } from '../shared.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addissue',
  templateUrl: './addissue.component.html',
  styleUrls: ['./addissue.component.scss']
})
export class AddissueComponent {
 
  addIssueForm!:FormGroup<any>;
  isInputReadonly: boolean = true;
  allsprint: any = [];
  options:any;
  sprintId: any;
  sprintName: any;
  constructor(public dialogRef: MatDialogRef<AddissueComponent>, private formBuilder: FormBuilder,
    private sharedService:SharedService,private router: Router) {}

  ngOnInit() {
    this.fetchAllSprint();
    this.addIssueForm = this.formBuilder.group({
      issuetitle: ['', Validators.required],
      sprintName: ['', Validators.required],
      status: ['New', Validators.required]
    });
  }

   
   fetchAllSprint() {
      this.sharedService.getAllSprint().subscribe((response:any)=>{
        if(response){
          this.allsprint = response;
          this.options = this.allsprint.filter((element:any) => element.isActive && (element.status==='In Progress' || element.status==='Not Started') );
          console.log(this.allsprint, 'allsprint');
        }
      },err=> {
        console.log(err);
      });
   }

  cancel(): void {
    this.dialogRef.close();
  }

   onSubmit() {
    if (this.addIssueForm.value.issuetitle && this.addIssueForm.value.sprintName) {
      console.log(this.addIssueForm.value);    
      let data:any = {        
        id: Math.floor(Math.random() * 900) + 100,
        issuetitle:this.addIssueForm.value.issuetitle,
        sprintName:this.sprintName,
        sprintId:this.sprintId,
        status:this.addIssueForm.value.status      
      }
      this.sharedService.postIssue(data).subscribe((res:any)=> {
        if(res){
          this.cancel();
          console.log(res);
          this.router.navigate(['/dashboard/issue']);
          alert("Issue Added Successfully");
        }
      },err=> {
        console.log(err);
      })
    } else {
     alert('Please fill all the field');
    } 
  }

  selectChange(event:any){
    let element = event.value;
    this.sprintId = element.id;
    this.sprintName = element.title;
    this.addIssueForm.value.sprintName = this.sprintName;
  }


}
