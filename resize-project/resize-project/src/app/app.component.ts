import {  Component } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  {


  title = 'resize-project';
  width: number;
  height: number;
 
  onResized(event) {
    this.width = event.newWidth;
    this.height = event.newHeight;
    console.log('funciona? alto: '+this.height+', ancho: '+this.width);

  }

  onResize(event) {
   console.log(event.target.innerWidth);
   console.log(event.target.innerHeight);
   this.height = event.target.innerHeight;


  }

}