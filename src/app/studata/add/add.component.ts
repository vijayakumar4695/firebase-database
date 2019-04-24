import { Component, OnInit,ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { StuService } from 'src/app/student/stu.service';
import {NgForm} from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @ViewChild('form') myForm;
  constructor(private service:StuService,private firestore:AngularFirestore) { }

  ngOnInit() {
   this.resetForm();
  }
  addts(value){
    delete value.id;
    if(value.id==null)
  this.firestore.collection('student').add(value);
else
this.firestore.doc('student/'+value.id).update(value)
this.myForm.reset();
  console.log(value)
  }
  resetForm(form?:NgForm){
    if(form!=null)
form.resetForm();

    this.service.studentdata={
      id:null,
      uname:"",
      email:"",
      regno:"",
      class:"",
      dayhostel:"",
      contactno:"",
    }
  }
 
}
