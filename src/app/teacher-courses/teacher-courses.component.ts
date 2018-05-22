import { Component, OnInit } from '@angular/core';
import { Course } from '../services/course.service';
import { TeacherService } from '../services/teacher.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-teacher-courses',
  templateUrl: './teacher-courses.component.html',
  styleUrls: ['./teacher-courses.component.css']
})
export class TeacherCoursesComponent implements OnInit {

  courses: Course[] = [];
  

  constructor(
    public teacher: TeacherService,
    public user: UserService
  ) { }

  ngOnInit() {

    this.user.check()
    .then(() => {
      
      this.user.getCourses()
      .then((result: Course[])=>{
        console.log(result);
        this.courses = result; // ===> most important line that brings everything together
      })
      .catch((err) =>{
        console.log("course list Error")
        console.log(err);
      })
    })
    .catch((err)=> {
      console.log("Something Went Wrong");
      console.log(err);
    });
  }

}
