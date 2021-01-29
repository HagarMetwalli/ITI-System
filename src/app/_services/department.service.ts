import { Department} from './../_module/department';
import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor(private http:HttpClient) { }
  getAll(){

    return this.http.get<Department[]>("http://localhost:8000/departments/list");
  }
  getByID(id:number){
    return this.http.get<Department>("http://localhost:8000/departments/details/"+id);
  }
  addStd(department:Department){
    return this.http.post<Department>("http://localhost:8000/departments/add",department);
  }
  deleteByID(id:Number){
    return this.http.get<Department>("http://localhost:8000/departments/delete/"+id);
  }
  editByID(id:Number,Department:Department){
    return this.http.post<Department>("http://localhost:8000/departments/edit/"+id,Department);
  }

  public flag:any;
  
  editStdSer:Department=new Department(1,'');

   //check null
   public checkNull(dept:Department){
     if(((dept._id)&&(dept.Name))||(dept.Name)){
       return true;
     }
     else{
       return false;
     }
   }
  
}
