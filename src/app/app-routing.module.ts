import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { TeacherCoursesComponent } from './teacher-courses/teacher-courses.component';
import { UserCoursesComponent } from './user-courses/user-courses.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UsersComponent } from './admin/users/users.component';
import { AdminTeachersComponent } from './admin/admin-teachers/admin-teachers.component';
import { AdminCoursesComponent } from './admin/admin-courses/admin-courses.component';

const routes: Routes = [
  {path: "", component:HomePageComponent},
  {path: "admin", component: AdminComponent},
  {path:"signup", component: SignupComponent},
  {path: "user/login", component: LoginComponent},
  {path: "user/:userId", component: UserProfileComponent},
  {path: "teacher/:teacherId", component: TeacherProfileComponent},
  {path: "user/:userId/edit", component: UserEditComponent},
  {path: "teacher/:teacherId/edit", component: TeacherEditComponent}, 
  {path: "teacher/:teacherId/courses", component: TeacherCoursesComponent},
  {path: "user/:userId/courses", component: UserCoursesComponent},
  {path: "course/add", component: AddCourseComponent},
  {path: "edit/user", component: EditUserComponent},
  {path: "edit/teacher", component:EditTeacherComponent},
  {path: "edit/course", component: EditCourseComponent},
  {path: "admin/users", component: UsersComponent},
  {path: "admin/teachers", component:AdminTeachersComponent},
  {path: "admin/courses", component: AdminCoursesComponent},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
