import { Component, OnInit } from '@angular/core';
import { Course, CourseService } from '../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-course-details',
  templateUrl: './user-course-details.component.html',
  styleUrls: ['./user-course-details.component.css']
})
export class UserCourseDetailsComponent implements OnInit {

  courseId: string;
  course: Course

  constructor(
    private request: ActivatedRoute,
    private res: Router,
    public courseServ: CourseService
  ) { }

  ngOnInit() {
    this.request.paramMap
    .subscribe((myParams)=>{
      this.courseId = myParams.get('courseId');


      this.fetchCourseData();
    });
  }

  fetchCourseData() {
    // component connect to service HERE 
    this.courseServ.getGeneralDetails(this.courseId)
      .then((result: Course)=>{
        this.course = result;
        console.log(result);
      })
      .catch((err)=>{
        console.log('course details error');
        console.log(err);
      });
  }

}
