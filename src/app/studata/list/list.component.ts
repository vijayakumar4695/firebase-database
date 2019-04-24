import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { StuService } from 'src/app/student/stu.service';
import { Study } from 'src/app/student/study.model';
import { __assign } from 'tslib';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 list:Study[];
  constructor(private firestore:AngularFirestore,private service:StuService) { }

  ngOnInit() {
    this.service.getStudent().subscribe(actionArray=>{
      this.list=actionArray.map(item=>{
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }as Study;
      })
    });
  }
  onEdit(stu:Study){
   this.service.studentdata=Object.assign({},stu);
  }
  onDelete(id:string){
    if(confirm("Are You Sure Want To Delete It")){
 this.firestore.doc('student/'+id).delete();
    }
  }
}
