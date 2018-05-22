import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { TeacherService } from './services/teacher.service';
import { CourseService, Course } from './services/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  turnOff = true

  courses: Course[] = [];

  constructor(
    public user: UserService,
    public teacher: TeacherService,
    public courseServ: CourseService
  ){}

  ngOnInit() {
    this.user.check()
    .then(() => console.log('CHECK', { teacher: this.teacher.currentUser, user: this.user.currentUser }))
    .catch((err)=> {
      console.log("App login check error");
      console.log(err);
    });

    this.courseServ.getGeneralCourses()
    .then((result: Course[])=>{
      console.log(result);
      this.courses = result; // ===> most important line that brings everything together
    })
    .catch((err) =>{
      console.log("course list Error")
      console.log(err);
    })
  }

  logoutClick(){
    this.user.logout()
    .then(() => console.log('LOGOUT', { teacher: this.teacher.currentUser, user: this.user.currentUser }))
      .catch((err)=>{
        console.log("APP LOGOUT Error")
        console.log(err);
      })
  }

  getUserService() {
    return this.user.currentUser
      ? this.user
      : this.teacher;
  }

  clickOff(){
    this.turnOff = !this.turnOff;
  }
}
