import { StudentService } from '../_services/student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from './../_module/student';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details-student',
  templateUrl: './details-student.component.html',
  styleUrls: ['./details-student.component.css']
})
export class DetailsStudentComponent implements OnInit {
  std : Student=new Student(0,"","","")
  constructor(public StudentService:StudentService , public ar : ActivatedRoute) { }
  ngOnInit(): void {
    let idParam=0;
    this.ar.params.subscribe(
      data=>{
        idParam=data['id'];
      }
    ) 
    this.StudentService.getByID(idParam).subscribe(data=>{
      this.std=data;
    })

}
}
