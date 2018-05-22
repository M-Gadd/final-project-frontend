import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../services/teacher.service';
import { CourseService } from '../services/course.service';
import { UserService } from '../services/user.service';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({
    url: `${environment.backUrl}/teacher/${this.user.currentUser._id}/editpicture`
  });

  feedback: string;

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

    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };
  }


  modelActive(){
    this.modeOn = !this.modeOn;
  }

  courseActive(){
    this.courseOn = !this.courseOn;
  }

  uploadImg(){
    // console.log(`http://localhost:3000/user/${this.user.currentUser._id}/editpicture`);
   
    this.uploader.uploadAll();
  }
}
