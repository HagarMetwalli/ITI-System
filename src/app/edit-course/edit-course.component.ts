import { CourseService } from './../_services/course.service';
import { Course } from './../_module/course';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  public editCS :Course=new Course(1,'');
  constructor(private CourseService:CourseService , private router:Router, public ar : ActivatedRoute ) {}
  public idParam=0;
  ngOnInit(): void {
     this.ar.params.subscribe(
      data=>{
        this.idParam=data['id'];
      }
    ) 
  this.CourseService.getByID(this.idParam).subscribe(
    data=>{
            this.editCS=data
    }
  )
 }
  flag:boolean=false;

  public editSubmit(){
   if(this.CourseService.checkNull(this.editCS)){
        console.log(this.editCS);
      this.CourseService.editByID(this.idParam,this.editCS).subscribe(data=>{
      this.router.navigate(['home/courses']);
       })
    }
    else{
      this.flag=true;
    }
    this.editCS.Name='';
  }

}
