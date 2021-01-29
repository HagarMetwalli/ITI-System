import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
 import { AddStudentComponent } from './add-student/add-student.component';
 import { EditStudentComponent } from './edit-student/edit-student.component';
import { DetailsStudentComponent } from './details-student/details-student.component';
//Department Imports
import { DepartmentListComponent } from './department-list/department-list.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { DetailsDepartmentComponent } from './details-department/details-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
//Courses Imports
import { CourseListComponent } from './course-list/course-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { DetailsCourseComponent} from './details-course/details-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent},
  //Student Routes
  { path: 'home/students', component:StudentListComponent},
  { path: 'home/students/add', component: AddStudentComponent },
   { path: 'home/students/edit/:id', component: EditStudentComponent },
   { path: 'home/students/details/:id', component: DetailsStudentComponent },
   { path: 'home/students/delete/:id', component:StudentListComponent},
   //Department Routes home/cources
   {path: 'home/deparments',component:DepartmentListComponent},
   {path: 'home/deparments/add',component:AddDepartmentComponent},
   { path: 'home/deparments/details/:id', component: DetailsDepartmentComponent },
   { path: 'home/deparments/delete/:id', component:DepartmentListComponent},
   { path: 'home/deparments/edit/:id', component:EditDepartmentComponent},
  //Course Routes 
  {path: 'home/courses',component:CourseListComponent},
  {path: 'home/courses/add',component:AddCourseComponent},
  { path: 'home/courses/details/:id', component: DetailsCourseComponent },
  { path: 'home/courses/delete/:id', component:CourseListComponent},
  { path: 'home/courses/edit/:id', component:EditCourseComponent},
   //{path:"*"}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
