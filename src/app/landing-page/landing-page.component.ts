import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  
  turnOff = true
  
  constructor(
    public user: UserService,
    public teacher: TeacherService
  ) { }

  ngOnInit() {
    this.user.check() 
    .catch((err)=> {
      console.log("App login check error");
      console.log(err);
    });
  }

  logoutClick(){
    this.user.logout()
      .catch((err)=>{
        console.log("APP LOGOUT Error")
        console.log(err);
      })
  }

  getUserService() {
    return this.user.currentUser
      ? this.user
      : this.teacher;
  }

  clickOff(){
    this.turnOff = !this.turnOff;
  }
}
