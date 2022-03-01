import { Component } from "@angular/core";
import jsQR from "jsQR";

@Component({
	selector: 'app-file-upload',
	templateUrl: './file-upload.component.html',
	styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent {
	fileName = '';
  file:  File | null = null;
  qrResultString: string = '';
  noFile: string = 'No file uploaded yet.';
  result: string | undefined = '';
  failure: string = 'QR Code was not found. Please try again.'
  data: string = 'Data from QR is: '

	getQRData(url: string) {
    const image = new Image;
    image.src = url;
    const canvas = document.querySelector("canvas");
    const ctx = canvas?.getContext("2d");
    
  
    image.onload = () => {
      ctx?.drawImage(image, 0, 0);
      const imageData = ctx?.getImageData(0, 0, image.width, image.height);
      const data  = imageData?.data as Uint8ClampedArray
      console.log(imageData);
      const code = jsQR(data, imageData?.width, imageData?.height);
      this.result = code?.data;
    }
  }

	onFileSelected(event: any) {
    this.result = '';
    this.file = event.target?.files[0];
    if (this.file) {
      this.fileName = this.file.name;
      if (this.file.type.match(/image\/*/) == null) {
        alert("Only images are supported.");
        return;
      }

      const preview = document.querySelector('img');
      const reader = new FileReader();
      const url = URL.createObjectURL(this.file);
      this.getQRData(url);
      reader.addEventListener("load", function(){
        if(preview) {
          preview.src = reader.result as string;
        }
      },false);
      if (this.file) {
        reader.readAsDataURL(this.file);
      }
    }
  }
}