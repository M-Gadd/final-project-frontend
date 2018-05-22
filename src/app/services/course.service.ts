import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/operator/toPromise';

import { environment } from '../../environments/environment';
import { UserService, User } from './user.service';

@Injectable()
export class CourseService {

  currentCourse: Course; 
  

  constructor(
    private ajaxCourse: HttpClient,
    public user:UserService
  ) { }

  postAddCor(creds: AddCourseCreds){
    // console.log(this.user.currentUser._id)
    return this.ajaxCourse
    .post(
      `${environment.backUrl}/course/${this.user.currentUser._id}/add`,
      creds,
    )
    .toPromise()
    // .then((apiResponse: any)=>{
    //   this.currentCourse = apiResponse.newCourse;
    //   return apiResponse;
    // })
  }
  getDetails(courseId) {
    return this.ajaxCourse
      .get(`${environment.backUrl}/${this.user.currentUser.role}/${this.user.currentUser._id}/courses/${courseId}`)
      .toPromise();
  }

  getGeneralDetails(courseId) {
    return this.ajaxCourse
      .get(`${environment.backUrl}/course/${courseId}`)
      .toPromise();
  }

  enroll(courseId, userId) {
    console.log("ENROLL FUNCTION")
    return this.ajaxCourse
      .get(`${environment.backUrl}/course/${courseId}/${userId}/enroll`)
      .toPromise();
  }

  getGeneralCourses(){
    return this.ajaxCourse
    .get(`${environment.backUrl}/course/homecourses`)
    .toPromise();
}

postEditCourse(courseId, creds: EditCourseCreds){
  console.log("HELLO AGGAAIN")

  return this.ajaxCourse
  .put(
  `${environment.backUrl}/course/${courseId}/edit`,
  creds,
  {withCredentials: true}
)
.toPromise()
.then((apiResponse: any)=>{
  this.currentCourse = apiResponse.courseInfo;
  return apiResponse;
});

}


//   postSignup(role, creds: SignupCredentials) {
//     return this.ajaxUser
//       .post(
//       `${environment.backUrl}/${role}/signup`,
//       creds,
//       {withCredentials: true}
//     )
//     .toPromise()
//     .then((apiResponse: any)=>{
//       this.currentUser = apiResponse.userInfo;
//       return apiResponse;
//     });
// };

}

export class Course {
_id: string;
name: string;
description: string;
category: string;
language: string;
image: string;
author:string;
videos: [{vidName:string, videoUrl:string}];
students: [object];
qna: [object];
status: string;
updated_at: Date;
created_at: Date;
}


export class AddCourseCreds {
  name: string;
  description: string;
  category: string;
  language: string;

}

export class EditCourseCreds {
name: string;
description: string;
category: string 
language: string;
}


