import { Component, OnInit } from '@angular/core';
import { AddCourseCreds, CourseService } from '../services/course.service';
import { Router } from '@angular/router';
import { TeacherService, Teacher } from '../services/teacher.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  addCreds: AddCourseCreds = new AddCourseCreds
  teacher: Teacher 

  
  constructor(
    public course: CourseService,
    public teacherService: TeacherService,
    private resVar: Router
  ) { }

  ngOnInit() {
  }

  addCourseSubmit() {
    this.course.postAddCor(this.addCreds)
    .then((result) => {
      this.resVar.navigateByUrl('/');
      // this.teacher.courses.push(result);
    })
    .catch((err)=>{
      console.log('Adding course error');
      console.log(err);
    })
  }

}
