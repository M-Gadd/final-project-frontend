import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/operator/toPromise';
import { FileSelectDirective } from "ng2-file-upload";

import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Injectable()
export class UserService {

  currentUser: User; 
  // userId: string;
  

  constructor(
    // private reqUser: ActivatedRoute,
    private ajaxUser: HttpClient,
    private resRoute: Router
  ) { }

    //GET /checklogin
    check(){
      return this.ajaxUser // "with credenytials mean send the cookies from the backend"
      .get(`${environment.backUrl}/user/checklogin`, {withCredentials: true})
      .toPromise()
      .then((apiResponse: any)=>{
        this.currentUser = apiResponse.userInfo;
        return apiResponse;
      });
    };

     //POST /sigup
    postSignup(role, creds: SignupCredentials) {
      return this.ajaxUser
        .post(
        `${environment.backUrl}/${role}/signup`,
        creds,
        {withCredentials: true}
      )
      .toPromise()
      .then((apiResponse: any)=>{
        this.currentUser = apiResponse.userInfo;
        return apiResponse;
      });
  };

    //POST /login
    postLogin(creds: LoginCredentials) {
      return this.ajaxUser
        .post(
          `${environment.backUrl}/user/login`,
          creds,
          {withCredentials: true}
        )
        .toPromise()
        .then((apiResponse: any)=>{
          this.currentUser = apiResponse.userInfo;
          return apiResponse;
        });
    };
    //GET /logout
    logout(){
      return this.ajaxUser
        .get(`${environment.backUrl}/user/logout`, {withCredentials: true})
        .toPromise()
        .then((apiResponse: any)=>{
          this.currentUser = apiResponse.userInfo;
          this.resRoute.navigateByUrl('/');
          return apiResponse;
          

        });
    };

    getCourses(){
      return this.ajaxUser
      .get(`${environment.backUrl}/${this.currentUser.role}/${this.currentUser._id}/courses`)
      .toPromise();
  }

  getGeneralCourses(){
    return this.ajaxUser
    .get(`${environment.backUrl}/${this.currentUser.role}/homecourses`)
    .toPromise();
}

  };


export class User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  language: string;
  image: string;
  fieldsOfInterest: [string];
  nationality: string;
  courses: [object];
  role: string;
  updated_at: Date;
  created_at: Date;
}

export class LoginCredentials {
  email: string;
  password: string;
}

export class SignupCredentials {
  firstName: string;
  lastName: string;
  password: string;
  email: string
}


export class EditUserCredentials {
  firstName: string;
  lastName: string;
  // password: string;
  email: string;
  age: number;
  language: string;
  fieldsOfInterest: [string];
  nationality: string;
}

export class UploadImgCreds {
  image: string;
}
