import { Component, ElementRef ,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('imgContainer') imgContainer!:ElementRef;
  ejectedCount = 3434 
  rejectedCount = 456475
  cpuTemp = 23.3
  title = 'portal';
  constructor(){
    setInterval(()=>{
      // this.updateValues()
    },400);
  }

  // updateValues(){
  //   this.ejectedCount += Math.floor(Math.random()*10)
  //   this.rejectedCount += Math.floor(Math.random() * 20)
  // }
}
