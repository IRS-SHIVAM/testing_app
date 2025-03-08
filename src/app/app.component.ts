import {
    AfterViewInit,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
} from '@angular/core';
declare var google: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('suka') image!: ElementRef;
    title = 'portal';
    suka!: HTMLElement;
    ejectedCount: number = 45126;
    rejectedCount: number = 124587;
    gpuTemperature: number = 65;
    cpuTemperature: number = 62;
    panalTemperature: number = 42;
    leftcamTemperature: number = 61;
    rightcamTemperature: number = 62;
    machineRunning: boolean = true;
    conveyorSpeed: number = 3.21;
    motorAmpere: number = 5.19;
    visionTemperature: number = 38;
    isError: boolean = true;
    isStop: boolean = false;
    serverData = {
        totalEjected: 45032,
        totalIgnored: 3402,
        totalRejected: 2312,
        totalUnknown: 7800,
        deviceId: 'SUK-AL-V3-2.0-10044',
        Efficiency: 24,
        sessionCount: 2,
        selectedRecipe: 'Recipe_1',
        sDate: '2025-02-19',
        sTime: '15:55:00',
        log: [
            {
                errorCode: 1002,
                message: 'Pressure low',
                errorFrequency: 2,
                errorTime: '2025-02-19 14:11:03',
                errorCause: 'Air Pressure might have gone below 4.5 bar',
                errorRemedy:
                    'Check the pressure from compressor unit,Check the shut off valve in ON position',
            },
            {
                errorCode: 1002,
                message: 'Pressure low',
                errorFrequency: 2,
                errorTime: '2025-02-19 14:11:03',
                errorCause: 'Air Pressure might have gone below 4.5 bar',
                errorRemedy:
                    'Check the pressure from compressor unit,Check the shut off valve in ON position',
            },
        ],
    };
    errorArray: any = [];
    hoverObject: any = {};
    constructor() {
        setInterval(() => {
            this.updateEjectedValues();
            this.updateRejectedValues();
        }, 400);
        (window as any).initTranslate =
            this.googleTranslateElementInit.bind(this);
    }
    ngOnInit(): void {
        this.loadGoogleTranslate();
    }
    ngAfterViewInit(): void {
        this.suka = this.image.nativeElement;

        setTimeout(() => {
            const icon = document.querySelector(
                '.goog-te-gadget-icon'
            ) as HTMLElement;
            if (icon) {
                icon.style.display = 'none';
            }
        }, 1000);
        setInterval(() => {
            this.errorArray['conveyorError'] = true;
            delete this.errorArray['cpuTempError'];
        }, 5000);
        setInterval(() => {
            this.errorArray['cpuTempError'] = true;
            this.errorArray['rightCamTempError'] = true;
        }, 2000);
        setInterval(() => {
            this.errorArray['gpuTempError'] = true;
        }, 3000);
        setInterval(() => {
            delete this.errorArray['conveyorError'];
        }, 15000);
        setInterval(() => {
            delete this.errorArray['gpuTempError'];
            delete this.errorArray['rightCamTempError'];
        }, 10000);

        if (window.innerWidth > 700) {
            this.hoverObject = {
                ejectCount: true,
                rejectCount: true,
            };
        }
    }
    updateEjectedValues() {
        this.ejectedCount += Math.floor(Math.random() * 10);
    }
    updateRejectedValues() {
        this.rejectedCount += Math.floor(Math.random() * 10);
    }
    trackByErrorCode(index: number, item: any) {
        return index;
    }
    addAnimation() {
        this.suka.classList.add('sukaEjectScale');
        // document.querySelector('.ejectCount')?.setAttribute('display', 'none');
    }
    removeAnimation() {
        setInterval(() => {
            this.suka.classList.remove('sukaUndoScale');
        }, 2000);
        this.suka.classList.remove('sukaEjectScale');
        this.suka.classList.add('sukaUndoScale');
    }
    startHoverEffect(borderBox: HTMLElement) {
        borderBox.style.display = 'block';
    }
    endHoverEffact(borderBox: HTMLElement) {
        borderBox.style.display = 'none';
    }
    cord: any = '';
    getImageCord(event: any) {
        this.cord += event?.offsetX + ',' + event?.offsetY + ' ';
    }

    loadGoogleTranslate() {
        const existingIframe = document.querySelector(
            'iframe.goog-te-banner-frame'
        );
        if (existingIframe) {
            existingIframe.remove();
        }
        const script = document.createElement('script');
        script.src =
            'https://translate.google.com/translate_a/element.js?cb=initTranslate';
        script.async = true;
        script.onload = () => this.googleTranslateElementInit();
        document.body.appendChild(script);
    }

    googleTranslateElementInit() {
        new google.translate.TranslateElement(
            {
                pageLanguage: 'en',
                includedLanguages: 'en,gu,hi,ta,te,mr',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            'google_translate_element'
        );
    }

    getCord() {
        console.log(this.cord);
        this.cord = '';
    }
    onHover(component: any) {
        if (window.innerWidth > 700) {
            this.hoverObject[component] = true;
        }
    }
    onLostFocus(component: any) {
        if (window.innerWidth > 700) {
            delete this.hoverObject[component];
        }
    }
}
