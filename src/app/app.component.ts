import { Component, ElementRef ,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('imgContainer') imgContainer!:ElementRef;

  title = 'portal';
  constructor(){
    // setInterval(()=>{
    //   console.log();
    // },4000);
  }
}
