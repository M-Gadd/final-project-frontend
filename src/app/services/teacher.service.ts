import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/operator/toPromise';

import { environment } from '../../environments/environment';

import {LoginCredentials, SignupCredentials} from './user.service';

@Injectable()
export class TeacherService {

  currentUser: Teacher; 


  constructor(
    private ajaxTeacher: HttpClient
  ) { }

   //GET /checklogin
  //  check(){
  //   return this.ajaxTeacher // "with credenytials mean send the cookies from the backend"
  //   .get(`http://localhost:3000/teacher/checklogin`, {withCredentials: true})
  //   .toPromise()
  //   .then((apiResponse: any)=>{
  //     this.currentUser = apiResponse.userInfo;
  //     return apiResponse;
  //   });
  // };

   //POST /sigup
//   postSignup(role, creds: SignupCredentials) {
//     return this.ajaxTeacher
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

  //POST /login
  // postLogin(creds: LoginCredentials) {
  //   return this.ajaxTeacher
  //     .post(
  //       `http://localhost:3000/user/login`,
  //       creds,
  //       {withCredentials: true}
  //     )
  //     .toPromise()
  //     .then((apiResponse: any)=>{
  //       this.currentUser = apiResponse.userInfo;
  //       return apiResponse;
  //     });
  // };
  //GET /logout
  // logout(){
  //   return this.ajaxTeacher
  //     .get(`http://localhost:3000/teacher/logout`, {withCredentials: true})
  //     .toPromise()
  //     .then((apiResponse: any)=>{
  //       this.currentUser = apiResponse.userInfo;
  //       return apiResponse;
  //     });
  // };

  getCourses(){
    return this.ajaxTeacher
    .get(`${environment.backUrl}/teacher/${this.currentUser._id}/courses`)
    .toPromise();
}
};



export class Teacher {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  description: string;
  age: number;
  language: string;
  image: string;
  fieldsOfSpeciality: [string];
  nationality: string;
  qualifications: string;
  status: string;
  courses: [object];
  role: string;
  updated_at: Date;
  created_at: Date;
}


export class EditTeacherCredentials {
  firstName: string;
  lastName: string;
  email: string;
  description: string;
  age: number;
  language: string;
  image: string;
  fieldsOfSpeciality: [string];
  nationality: string;
  qualifications: string;
  status: string;
  courses: [object];
  role: string;
}