import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    public user: UserService,
    public teacher: TeacherService
  ) { }

  ngOnInit() {
}
}
