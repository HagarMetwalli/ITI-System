import { Course } from './../_module/course';
import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http:HttpClient) { }

  getAll(){
  return this.http.get<Course[]>("http://localhost:8000/courses/list");
  }
  getByID(id:number){
    return this.http.get<Course>("http://localhost:8000/courses/details/"+id);
  }
  addStd(course:Course){
    return this.http.post<Course>("http://localhost:8000/courses/add",course);
  }
  deleteByID(id:Number){
    return this.http.get<Course>("http://localhost:8000/courses/delete/"+id);
  }
  editByID(id:Number,course:Course){
    return this.http.post<Course>("http://localhost:8000/courses/edit/"+id,course);
  }
    
  public flag:any;

   //check null
   public checkNull(CS:Course){
     if(((CS._id)&&(CS.Name))||(CS.Name)){
       return true;
     }
     else{
       return false;
     }
   }
}
