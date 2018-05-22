import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { TeacherService } from '../services/teacher.service';
import { CourseService, Course } from '../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {
  
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
    this.request.paramMap
    .subscribe((myParams)=>{
    this.courseId = myParams.get('courseId');
    this.userId = myParams.get('userId');
  // })
  // .catch((err)=> {
  //   console.log("Something Went Wrong");
  //   console.log(err);
  // });

  this.getEnrolled();

});
  }

  getEnrolled() {
    console.log("GET ENROLLED FUNCTION")
    // component connect to service HERE 
    this.courseServ.enroll(this.courseId, this.userId)
      .then((result: Course)=>{
        this.course = result;
        this.res.navigateByUrl('/');
        console.log(result);
      })
      .catch((err)=>{
        console.log('course details error');
        console.log(err);
      });
  
  
  }

}
