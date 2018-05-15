import { Component, OnInit } from '@angular/core';
import { Course, CourseService } from '../../services/course.service';
import { AdminService } from '../../services/admin.service';


@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})
export class AdminCoursesComponent implements OnInit {

  courses: Course[] = [];

  constructor(
    public admin: AdminService,
    public course: CourseService
  ) { }

  ngOnInit() {
    this.admin.getCourses()
    .then((result: Course[])=>{
    console.log("this is result  "+result);
    console.log("this is courses  "+this.courses);
    
    this.courses = result; // ===> most important line that brings everything together
  })
  .catch((err) =>{
    console.log("Courses list Error")
    console.log(err);
  })
  }

}
