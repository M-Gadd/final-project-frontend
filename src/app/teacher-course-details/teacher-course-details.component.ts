import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService, Course, EditCourseCreds } from '../services/course.service';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-teacher-course-details',
  templateUrl: './teacher-course-details.component.html',
  styleUrls: ['./teacher-course-details.component.css']
})
export class TeacherCourseDetailsComponent implements OnInit {

  editCreds: EditCourseCreds = new EditCourseCreds;
  
  courseId: string;
  course: Course;
  feedback: string;

  courseEdit = false

  public uploaderImg: FileUploader = new FileUploader({
    // url: `${environment.backUrl}/course/${this.courseId}/editpicture`
  });

  public uploaderVid: FileUploader = new FileUploader({
    // url: `${environment.backUrl}/course/${this.courseId}/editpicture`
  });

  constructor(
    private request: ActivatedRoute,
    private res: Router,
    public courseServ: CourseService
  ) { }

  ngOnInit() {
    this.request.paramMap
    .subscribe((myParams)=>{
      this.courseId = myParams.get('courseId');

      this.uploaderImg.onSuccessItem = (item, response) => {
        this.feedback = JSON.parse(response).message;
      };
  
      this.uploaderImg.onErrorItem = (item, response, status, headers) => {
        this.feedback = JSON.parse(response).message;
      };

      this.uploaderVid.onSuccessItem = (item, response) => {
        this.feedback = JSON.parse(response).message;
      };
  
      this.uploaderVid.onErrorItem = (item, response, status, headers) => {
        this.feedback = JSON.parse(response).message;
      };


      this.fetchCourseData();
    });
  }

  fetchCourseData() {
    // component connect to service HERE 
    this.courseServ.getDetails(this.courseId)
      .then((result: Course)=>{
        this.course = result;
        console.log(result);
      })
      .catch((err)=>{
        console.log('phone details error');
        console.log(err);
      });
  }

  uploadImg(){
    this.uploaderImg.onBeforeUploadItem = (item) =>{
      item.url=`${environment.backUrl}/course/${this.courseId}/editpicture`
      
    }
    this.uploaderImg.uploadAll();
  }

  uploadVid(){
    this.uploaderVid.onBeforeUploadItem = (item) =>{
      item.url=`${environment.backUrl}/course/${this.courseId}/videos/add`
      
    }
    this.uploaderVid.uploadAll();
  }

  courseOn(){
    this.courseEdit = !this.courseEdit
  }

  onEditSubmit(){
    console.log("HELLOOOO")
    this.courseServ.postEditCourse(this.courseId, this.editCreds)
    .then((result) => {
      this.res.navigateByUrl('/');
    })
    .catch((err)=>{
      console.log('login error');
      console.log(err);
    })
  }

}
