import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MachineInfoComponent } from './components/machine-info/machine-info.component';
import { WarningErrorComponent } from './components/warning-error/warning-error.component';
import { CpuSvgComponent } from './svg-component/cpu-svg/cpu-svg.component';
import { GpuSvgComponent } from './svg-component/gpu-svg/gpu-svg.component';
import { ConveyorSvgComponent } from './svg-component/conveyor-svg/conveyor-svg.component';
import { MotorSvgComponent } from './svg-component/motor-svg/motor-svg.component';
import { LeftCameraSvgComponent } from './svg-component/left-camera-svg/left-camera-svg.component';
import { RightCameraSvgComponent } from './svg-component/right-camera-svg/right-camera-svg.component';
import { PanelSvgComponent } from './svg-component/panel-svg/panel-svg.component';
import { VisionSvgComponent } from './svg-component/vision-svg/vision-svg.component';

@NgModule({
    declarations: [AppComponent, MachineInfoComponent, WarningErrorComponent, CpuSvgComponent, GpuSvgComponent, ConveyorSvgComponent, MotorSvgComponent, LeftCameraSvgComponent, RightCameraSvgComponent, PanelSvgComponent, VisionSvgComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
