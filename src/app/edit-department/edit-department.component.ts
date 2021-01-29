import { Department } from './../_module/department';
import { DepartmentService } from './../_services/department.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {

  public editDept :Department=new Department(1,'');
  constructor(private DepartmentService:DepartmentService , private router:Router, public ar : ActivatedRoute ) {}
  public idParam=0;
  ngOnInit(): void {
     this.ar.params.subscribe(
      data=>{
        this.idParam=data['id'];
      }
    ) 
  this.DepartmentService.getByID(this.idParam).subscribe(
    data=>{
            this.editDept=data
    }
  )
 }
  flag:boolean=false;

  public editSubmit(){
   if(this.DepartmentService.checkNull(this.editDept)){
        console.log(this.editDept);
      this.DepartmentService.editByID(this.idParam,this.editDept).subscribe(data=>{
      this.router.navigate(['home/deparments']);
       })
    }
    else{
      this.flag=true;
    }
    this.editDept.Name='';
  }

}
