import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'portal';
  ejectedCount: number = 45126;
  rejectedCount: number = 124587;
  gpuTemperature: number = 65;
  cpuTemperature: number = 62;

  constructor() {
    setInterval(() => {
      this.updateEjectedValues();
      this.updateRejectedValues();
    }, 400);
  }
  updateEjectedValues() {
    this.ejectedCount += Math.floor(Math.random() * 10);
  }
  updateRejectedValues() {
    this.rejectedCount += Math.floor(Math.random() * 10);
  }
}
