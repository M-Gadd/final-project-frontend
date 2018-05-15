import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    public user: UserService,
  ) { }

  ngOnInit() {
    this.user.check() 
    .catch((err)=> {
      console.log("Something Went Wrong");
      console.log(err);
    });
  }




}
