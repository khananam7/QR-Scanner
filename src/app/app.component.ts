
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title: string = 'QR Code Scanner';
  uploadTab: string = 'Upload a QR Code';
  scanTab: string = 'Scan using a Camera';
  description: string = 'Scan or upload a QR Code using one of options below';
  
}
