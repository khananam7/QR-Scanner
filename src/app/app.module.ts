import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './material-module';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ScanImageComponent } from './scan-image/scan-image.component';



@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    ScanImageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    ZXingScannerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
