import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from './../_services/course.service';
import { Course } from './../_module/course';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  flag:boolean=false;
  constructor(private CourseService:CourseService,private router:Router ) { }

  public newCS:Course=new Course(1,"");
  public addSubmit(){
    if(this.CourseService.checkNull(this.newCS))
     {3
        console.log(this.newCS);
       this.CourseService.addStd(this.newCS).subscribe(
        data=>{
            this.router.navigate(['home/courses'])
        }

       );
      
    }
       
    else
      {
        this.flag=true;
        this.newCS._id=1;
        this.newCS.Name='';
      }  
    }
  ngOnInit(): void {
    
}


}
