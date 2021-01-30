import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { DetailsStudentComponent } from './details-student/details-student.component';
import { HomeComponent } from './home/home.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { DetailsDepartmentComponent } from './details-department/details-department.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { DetailsCourseComponent } from './details-course/details-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    AddStudentComponent,
    EditStudentComponent,
    DetailsStudentComponent,
    HomeComponent,
    AddDepartmentComponent,
    DetailsDepartmentComponent,
    DepartmentListComponent,
    EditDepartmentComponent,
    CourseListComponent,
    AddCourseComponent,
    DetailsCourseComponent,
    EditCourseComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
