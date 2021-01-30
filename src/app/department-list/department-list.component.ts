import { Department } from './../_module/department';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from './../_services/department.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  addf:boolean=false;
  departments:Department[]=[];
  constructor(private  DepartmentService : DepartmentService  , private router:Router, public ar : ActivatedRoute ) {}
  ngOnInit(): void {
    this. DepartmentService.getAll().subscribe(arr=>{
      this.departments=arr;
     
    })
  }
  public flag:any;

  //Pagenation
  itemsCount: number = 7;
  p!: number;
  items = [];
  newDept:Department=new Department(0,'');

public delFnc(deptID:Number){
  let idParam=0;
  this.ar.params.subscribe(
    data=>{
      idParam=data['id'];
    }
  ) 
  this.DepartmentService.deleteByID(deptID).subscribe(data=>{
    this.router.navigate(['home/deparments']);
   })
  }
  

}
