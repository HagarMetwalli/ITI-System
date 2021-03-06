import { Course } from './../_module/course';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from './../_services/course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  addf:boolean=false;
  courses:Course[]=[];
  constructor(private CourseService : CourseService , private router:Router, public ar : ActivatedRoute ) {}
  ngOnInit(): void {
    this. CourseService.getAll().subscribe(arr=>{
      this.courses=arr;
     
    })
  }
    public flag:any;
   //Pagenation
    itemsCount: number = 7;
    p!: number;
   //end paggination
  items = [];
  newCS:Course=new Course(0,'');

public delFnc(csID:Number){
  let idParam=0;
  this.ar.params.subscribe(
    data=>{
      idParam=data['id'];
    }
  ) 
  this.CourseService.deleteByID(csID).subscribe(data=>{
    this.router.navigate(['home/courses']);
   })
  }

}
