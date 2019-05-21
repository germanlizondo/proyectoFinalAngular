import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { SERVICE } from 'src/app/config/config';
import { FileUploader } from 'ng2-file-upload';
import { Image } from 'src/app/models/images.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-modalimages',
  templateUrl: './modalimages.component.html',
  styleUrls: ['./modalimages.component.css']
})
export class ModalimagesComponent implements OnInit {

  public uploader:FileUploader = new FileUploader(
    {url: SERVICE, itemAlias: 'profileimage'});
  fileToUpload: File = null;
  images : Image[] = []
  constructor(public _userService: UserService) { }

  ngOnInit() {

    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };

    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      console.log("ImageUpload:uploaded");
      this._userService
      this.getImages();
  };
  this.getImages();
  }


  getImages(){
this.images = [];
    this._userService.getAllimages()
    .subscribe((data:any)=>{
      let image: Image 
        for (let i = 0; i < data.length; i++) {
          image = new Image();
          image.name = data[i].file;
          image.url = SERVICE+"images/"+ data[i].file;
          image.selected = false;
          this.images.push(image);
          
        }
    })
  }


  updateImage( files: FileList ){
    this.fileToUpload = files.item(0);  
  }


  sendImage(){

    this._userService.cargarImage(this.fileToUpload).subscribe(data => {
      console.log("ok")
     
    }, error => {
        console.log(error);
      });
  
}

seleccionaImg(img:Image){

  this.images.forEach(image => {
    if(image.url != img.url ){
      image.selected = false;
    }else{
      img.selected = true;

    }
  });
 
  
}

cambiaImatge(){
  let img = new Image();
  this.images.forEach(image => {
    if(image.selected ){
      img.name = image.name
    }
  });
  this._userService.updateImage(img.name)
  .subscribe((data)=>{
    console.log(data);
    localStorage.setItem('img',SERVICE+'images/'+ img.name);
    this._userService.user.img = SERVICE+'images/'+ img.name;
  })

}
}
