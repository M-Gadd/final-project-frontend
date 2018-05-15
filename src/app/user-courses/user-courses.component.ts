import { Component, OnInit } from '@angular/core';
import { Course } from '../services/course.service';
import { User, UserService } from '../services/user.service';

@Component({
  selector: 'app-user-courses',
  templateUrl: './user-courses.component.html',
  styleUrls: ['./user-courses.component.css']
})
export class UserCoursesComponent implements OnInit {

  courses: Course[] = [];

  constructor(
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
