import {  Directive, ElementRef, OnInit, Renderer, Component, ViewChildren, AfterViewInit} from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {


  private el: any;
  private renderer: Renderer;
  private prevHeight: number;
  private sameCount: number;

  @ViewChildren("iframeAutoHeight") myIdentifier: ElementRef;
  
  Constructor() { }
  
  title = 'resize-project';
  width: number;
  height: number;
  mio : number;
 
  onResized(event) {
    this.width = event.newWidth;
    this.height = event.newHeight;
    console.log('funciona? alto: '+this.height+', ancho: '+this.width);

  }

  onResize(event) {
    const self = this;
   console.log(event.target.innerWidth);
   console.log(event.target.innerHeight);
   this.height = event.target.innerHeight;
   console.log(this.myIdentifier.nativeElement.height());
  }

}