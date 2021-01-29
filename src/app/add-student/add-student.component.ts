import { Student } from './../_module/student';
import { StudentService } from './../_services/student.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  
  flag:boolean=false;
  constructor(private StudentService:StudentService,private router:Router ) { }
  public newStd:Student=new Student(1,"","","");
  public addSubmit(){
    if(this.StudentService.checkNull(this.newStd))
     {
        console.log(this.newStd);
       this.StudentService.addStd(this.newStd).subscribe(
        data=>{
            this.router.navigate(['home/students'])
            console.log(data)
        }

       );
      
    }
       
    else
      {
        this.flag=true;
        this.newStd._id=1;
        this.newStd.Name='';
        this.newStd.Email='' ;
        this.newStd.Department='' ;
      }  
    }
  ngOnInit(): void {
    
}
}

