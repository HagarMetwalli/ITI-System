import { Student } from './../_module/student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from './../_services/student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  public editStd :Student=new Student(1,'','','');
  constructor(private StudentService:StudentService , private router:Router, public ar : ActivatedRoute ) {}
  public idParam=0;
  ngOnInit(): void {
     // let edSt=this.router.
     this.ar.params.subscribe(
      data=>{
        this.idParam=data['id'];
      }
    ) 
  this.StudentService.getByID(this.idParam).subscribe(
    data=>{
            this.editStd=data
    }
  )
 }
  flag:boolean=false;

  public editSubmit(){
   if(this.StudentService.checkNull(this.editStd)){
        console.log(this.editStd);
      this.StudentService.editByID(this.idParam,this.editStd).subscribe(data=>{
      this.router.navigate(['home/students']);
       })
    }
    else{
      this.flag=true;
    }
    this.editStd.Name='';
    this.editStd.Email='';
    this.editStd.Department='';
  }
}
