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

  postAddCor(id, creds: AddCourseCreds){
    // console.log(this.user.currentUser._id)
    return this.ajaxCourse
    .post(
      `http://localhost:3000/course/${this.user.currentUser._id}/add`,
      creds,
    )
    .toPromise()
    // .then((apiResponse: any)=>{
    //   this.currentCourse = apiResponse.newCourse;
    //   return apiResponse;
    // })
  }


//   postSignup(role, creds: SignupCredentials) {
//     return this.ajaxUser
//       .post(
//       `http://localhost:3000/${role}/signup`,
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
_id: string
name: string;
description: string;
category: string 
language: string;
image: string;
author:string
videos: [object];
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
image: string;
author:string
videos: [object];
students: [object];
qna: [object];
}


