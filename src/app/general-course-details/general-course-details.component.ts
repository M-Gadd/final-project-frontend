import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService, Course, EditCourseCreds } from '../services/course.service';

@Component({
  selector: 'app-general-course-details',
  templateUrl: './general-course-details.component.html',
  styleUrls: ['./general-course-details.component.css']
})
export class GeneralCourseDetailsComponent implements OnInit {
  
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
