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
      .get(`${environment.backUrl}/admin/users`)
      .toPromise();
  }

  getTeachers(){
    return this.ajaxAdmin
      .get(`${environment.backUrl}/admin/teachers`)
      .toPromise();
  }

  getCourses(){
    return this.ajaxAdmin
      .get(`${environment.backUrl}/admin/courses`)
      .toPromise();
  }

}
