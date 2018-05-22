import { Component, OnInit } from '@angular/core';
import { UserService, UploadImgCreds } from '../services/user.service';
import { Router } from '@angular/router';
import {FileUploader} from 'ng2-file-upload';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  // uploadCreds: UploadImgCreds = new UploadImgCreds;

  modeOn = false;

  public uploader: FileUploader = new FileUploader({
    url: `${environment.backUrl}/user/${this.user.currentUser._id}/editpicture`
  });

  feedback: string;

  constructor(
    public user: UserService,
    private resVar: Router
  ) { }

  ngOnInit() {
    this.user.check() 
    .catch((err)=> {
      console.log("Something Went Wrong");
      console.log(err);
    });


    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };
  }

  modelActive(){
    this.modeOn = !this.modeOn;
  }


  uploadImg(){
    // this.uploader.onBuildItemForm = ((item)=>{
    //   item.url = `${environment.backUrl}/user/${this.user.currentUser._id}/editpicture`

    // })
    console.log(`${environment.backUrl}/user/${this.user.currentUser._id}/editpicture`);
   
    this.uploader.uploadAll();
  }
}
