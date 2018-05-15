import { Component, OnInit } from '@angular/core';
import { UserService, LoginCredentials } from '../services/user.service';
import { TeacherService } from '../services/teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formCreds: LoginCredentials = new LoginCredentials;

  role: string; 

 

  constructor(
    public user: UserService,
    public teacher: TeacherService,
    private resRoute: Router

  ) { }

  ngOnInit() {
  }
    loginSubmit() {
    //   if(this.getService()===this.user){
    //     this.role = "user"
    //   } else {
    //     this.role = "teacher"
    //   }

      this.user.postLogin(this.formCreds)
      .then((result) => {
        this.resRoute.navigateByUrl('/');
      })
      .then(() => console.log('LOGOUT', { teacher: this.teacher.currentUser, user: this.user.currentUser }))
      .catch((err)=>{
        console.log('login error');
        console.log(err);
      })
    
  }

  getService() {
    return this.user.currentUser
      ? this.user
      : this.teacher;
  }

}
