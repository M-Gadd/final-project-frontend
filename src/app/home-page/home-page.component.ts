import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { TeacherService } from '../services/teacher.service';
import { Course, CourseService } from '../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  courses: Course[] = [];
  coursesSD: Course[] = [];
  coursesMR: Course[] = [];
  coursesHR: Course[] = [];
  courses2: Course[] = [];
  courseId: string;
  userId: string;

  course: Course;
  

  constructor(
    public user: UserService,
    public teacher: TeacherService,
    public courseServ: CourseService,
    private request: ActivatedRoute,
    private res: Router

  ) { }

  ngOnInit() {
    // this.user.check()
    // .then(() => {
      
      this.courseServ.getGeneralCourses()
      .then((result: Course[])=>{
        console.log(result);
        this.courses = result; // ===> most important line that brings everything together
        this.coursesSD = result.filter(item => item.category === 'SD')
        this.coursesMR = result.filter(item => item.category === 'Marketing')
        this.coursesHR = result.filter(item => item.category === 'HR')
        
      })
      .catch((err) =>{
        console.log("course list Error")
        console.log(err);
      })

}



}
