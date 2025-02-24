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
  machineRunning:boolean = true;
  serverData= {
    totalEjected: 45032,
    "totalIgnored": 3402,
    "totalRejected": 2312,
    "totalUnknown": 7800,
    "deviceId": "SUK-AL-V3-2.0-10044",
    "Efficiency": 24,
    "sessionCount": 2,
    "selectedRecipe": "Recipe_1",
    "sDate": "2025-02-19",
    "sTime": "15:55:00",
    "conveyorSpeed": 3.21,
    "motorAmpere": 5.19,
    "log": [{
      "errorCode": 1002,
      "message": "Pressure low",
      "errorFrequency": 2,
      "errorTime": "2025-02-19 14:11:03",
      "errorCause": "Air Pressure might have gone below 4.5 bar",
      "errorRemedy": "Check the pressure from compressor unit,Check the shut off valve in ON position"
    },
    {
      "errorCode": 1002,
      "message": "Pressure low",
      "errorFrequency": 2,
      "errorTime": "2025-02-19 14:11:03",
      "errorCause": "Air Pressure might have gone below 4.5 bar",
      "errorRemedy": "Check the pressure from compressor unit,Check the shut off valve in ON position"
    },
    {
      "errorCode": 1002,
      "message": "Pressure low",
      "errorFrequency": 2,
      "errorTime": "2025-02-19 14:11:03",
      "errorCause": "Air Pressure might have gone below 4.5 bar",
      "errorRemedy": "Check the pressure from compressor unit,Check the shut off valve in ON position"
    },
    {
      "errorCode": 1002,
      "message": "Pressure low",
      "errorFrequency": 2,
      "errorTime": "2025-02-19 14:11:03",
      "errorCause": "Air Pressure might have gone below 4.5 bar",
      "errorRemedy": "Check the pressure from compressor unit,Check the shut off valve in ON position"
    },
    {
      "errorCode": 1002,
      "message": "Pressure low",
      "errorFrequency": 2,
      "errorTime": "2025-02-19 14:11:03",
      "errorCause": "Air Pressure might have gone below 4.5 bar",
      "errorRemedy": "Check the pressure from compressor unit,Check the shut off valve in ON position"
    },
    {
      "errorCode": 1002,
      "message": "Pressure low",
      "errorFrequency": 2,
      "errorTime": "2025-02-19 14:11:03",
      "errorCause": "Air Pressure might have gone below 4.5 bar",
      "errorRemedy": "Check the pressure from compressor unit,Check the shut off valve in ON position"
    }]
  }

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
