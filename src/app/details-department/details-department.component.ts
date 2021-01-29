import { Department } from './../_module/department';
import { DepartmentService } from './../_services/department.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details-department',
  templateUrl: './details-department.component.html',
  styleUrls: ['./details-department.component.css']
})
export class DetailsDepartmentComponent implements OnInit {
  dept : Department=new Department(0,"")
  constructor(public DepartmentService:DepartmentService, public ar : ActivatedRoute) { }
  ngOnInit(): void {
    let idParam=0;
    this.ar.params.subscribe(
      data=>{
        idParam=data['id'];
      }
    ) 
    this.DepartmentService.getByID(idParam).subscribe(data=>{
      this.dept=data;
    })

}

}
