import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from './../_services/course.service';
import { Course } from './../_module/course';
@Component({
  selector: 'app-details-course',
  templateUrl: './details-course.component.html',
  styleUrls: ['./details-course.component.css']
})
export class DetailsCourseComponent implements OnInit {
  course : Course=new Course(0,"")
  constructor(public CourseService:CourseService, public ar : ActivatedRoute) { }
  ngOnInit(): void {
    let idParam=0;
    this.ar.params.subscribe(
      data=>{
        idParam=data['id'];
      }
    ) 
    this.CourseService.getByID(idParam).subscribe(data=>{
      this.course=data;
    })
  }
}
