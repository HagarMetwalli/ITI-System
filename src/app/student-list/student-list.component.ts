import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from './../_services/student.service';
import { Student } from './../_module/student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  addf:boolean=false;
  students:Student[]=[];
  constructor(private StudentService:StudentService , private router:Router, public ar : ActivatedRoute ) {}
  ngOnInit(): void {
    this.StudentService.getAll().subscribe(arr=>{
      this.students=arr;
     
    })
  }
    //Pagenation
  itemsCount: number = 7;
  p!: number;
  
  public flag:any;  
  items = [];
  newStd:Student=new Student(0,'','','','');

public delFnc(stdID:Number){
  console.log(stdID)
  let idParam=0;
  this.ar.params.subscribe(
    data=>{
      idParam=data['id'];
    }
  ) 
  this.StudentService.deleteByID(stdID).subscribe(data=>{
    this.router.navigate(['home/students']);
   })
  }
  

}
