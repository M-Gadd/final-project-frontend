import { Component, OnInit } from '@angular/core';
import { Teacher, TeacherService } from '../../services/teacher.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-in-active-teachers',
  templateUrl: './in-active-teachers.component.html',
  styleUrls: ['./in-active-teachers.component.css']
})
export class InActiveTeachersComponent implements OnInit {

  teachers: Teacher[] = [];
  

  constructor(
    public teacher: TeacherService,
    public admin: AdminService
  ) { }

  ngOnInit() {    

  this.admin.getTeachers()
    .then((result: Teacher[])=>{
    console.log(result);
    this.teachers = result; // ===> most important line that brings everything together
  })
  .catch((err) =>{
    console.log("Teacher list Error")
    console.log(err);
  })
  }s

}
