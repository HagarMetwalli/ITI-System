import { DepartmentService } from './../_services/department.service';
import { Department } from './../_module/department';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  flag:boolean=false;
  constructor(private DepartmentService:DepartmentService,private router:Router ) { }

  public newDept:Department=new Department(1,"");
  public addSubmit(){
    if(this.DepartmentService.checkNull(this.newDept))
     {
        console.log(this.newDept);
       this.DepartmentService.addStd(this.newDept).subscribe(
        data=>{
            this.router.navigate(['home/deparments'])
            console.log(data)
        }

       );
      
    }
       
    else
      {
        this.flag=true;
        this.newDept._id=1;
        this.newDept.Name='';
      }  
    }
  ngOnInit(): void {
    
}

}
