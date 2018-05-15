import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/operator/toPromise'

import { environment } from '../../environments/environment'


@Injectable()
export class AdminService {

  constructor(
    private ajaxAdmin: HttpClient
  ) { }

  getUsers(){
    return this.ajaxAdmin
      .get(`http://localhost:3000/admin/users`)
      .toPromise();
  }

  getTeachers(){
    return this.ajaxAdmin
      .get(`http://localhost:3000/admin/teachers`)
      .toPromise();
  }

  getCourses(){
    return this.ajaxAdmin
      .get(`http://localhost:3000/admin/courses`)
      .toPromise();
  }

}
