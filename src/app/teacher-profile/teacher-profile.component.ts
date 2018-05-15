import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../services/teacher.service';
import { CourseService } from '../services/course.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit {

  modeOn = false;
  courseOn = false;

  constructor(
    public user: UserService,
    public teacher: TeacherService,
    public course: CourseService
  ) { }

  ngOnInit() {
    this.user.check() 
    .catch((err)=> {
      console.log("Something Went Wrong");
      console.log(err);
    });
  }


  modelActive(){
    this.modeOn = !this.modeOn;
  }

  courseActive(){
    this.courseOn = !this.courseOn;
  }
}
