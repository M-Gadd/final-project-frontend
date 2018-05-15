import { Component, OnInit } from '@angular/core';
import { SignupCredentials, UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formCreds: SignupCredentials = new SignupCredentials


  role: string;
  showForm = false;
  generaluser: any;
  trial = false;
  closeChoice = true;

  constructor(

    public user: UserService,
    public teacher: TeacherService,
    private resVar: Router
  ) { }

  ngOnInit() {
  }

  signupSubmit() {
    // if(this.role === "user"){
    //   this.generaluser = this.user
    // } else{
    //   this.generaluser = this.teacher
    // }
    this.user.postSignup(this.role, this.formCreds)
    .then((result) => {
      this.resVar.navigateByUrl('/');
    })
    .catch((err)=>{
      console.log('login error');
      console.log(err);
    })
  }


  onTeacherChoice(){
    this.showForm = !this.showForm;
    this.role = "teacher"
    this.trial = true;
    this.closeChoice = false;
  }

  onUserChoice(){

    this.showForm = !this.showForm;
    this.role = "user"
    this.closeChoice = false;

  }

}
