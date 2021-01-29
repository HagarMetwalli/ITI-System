import { Student } from './../_module/student';
import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  getAll(){
    return this.http.get<Student[]>("http://localhost:8000/Students/list");
  }
  getByID(id:number){
    return this.http.get<Student>("http://localhost:8000/Students/details/"+id);
  }
  addStd(student:Student){
    return this.http.post<Student>("http://localhost:8000/Students/add",student);
  }
  deleteByID(id:Number){
    return this.http.get<Student>("http://localhost:8000/Students/delete/"+id);
  }
  editByID(id:Number,student:Student){
    return this.http.post<Student>("http://localhost:8000/Students/edit/"+id,student);
  }
  constructor(private http:HttpClient) { }
  public flag:any;
  items = [];
  newStd:Student=new Student(1,'','','');
  editStdSer:Student=new Student(1,'','','');

   //check null
   public checkNull(std:Student){
     if(((std.Name)&&(std.Email))&&(std.Department)||((std._id)&&(std.Name)&&(std.Email)&&(std.Department))){
       return true;
     }
     else{
       return false;
     }
   }
  
}
