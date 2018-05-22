import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';
import { TeacherService } from './services/teacher.service';
import { CourseService } from './services/course.service';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import { AddCourseComponent } from './add-course/add-course.component';
// import { CoursesComponent } from './courses/courses.component';
import { TeacherCoursesComponent } from './teacher-courses/teacher-courses.component';
import { UserCoursesComponent } from './user-courses/user-courses.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminTeachersComponent } from './admin/admin-teachers/admin-teachers.component';
import { AdminCoursesComponent } from './admin/admin-courses/admin-courses.component';
import { AdminService } from './services/admin.service';
import { FileSelectDirective, FileUploader, FileUploadModule } from 'ng2-file-upload';
import { TeacherCourseDetailsComponent } from './teacher-course-details/teacher-course-details.component';
import { UserCourseDetailsComponent } from './user-course-details/user-course-details.component';
import { GeneralCourseDetailsComponent } from './general-course-details/general-course-details.component';
import { InActiveTeachersComponent } from './admin/in-active-teachers/in-active-teachers.component';
import { InActiveCoursesComponent } from './admin/in-active-courses/in-active-courses.component';
import { EnrollComponent } from './enroll/enroll.component';
import { SearchPipe } from './pipes/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomePageComponent,
    SignupComponent,
    LoginComponent,
    EditCourseComponent,
    EditUserComponent,
    EditTeacherComponent,
    UserProfileComponent,
    TeacherProfileComponent,
    UserEditComponent,
    TeacherEditComponent,
    AddCourseComponent,
    // CoursesComponent,
    TeacherCoursesComponent,
    UserCoursesComponent,
    AdminComponent,
    UsersComponent,
    LandingPageComponent,
    AdminTeachersComponent,
    AdminCoursesComponent,
    // FileSelectDirective,
    TeacherCourseDetailsComponent,
    UserCourseDetailsComponent,
    GeneralCourseDetailsComponent,
    InActiveTeachersComponent,
    InActiveCoursesComponent,
    EnrollComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FileUploadModule
  ],
  providers: [UserService, TeacherService, CourseService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
