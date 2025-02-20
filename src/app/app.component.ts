import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('imgContainer') imgContainer!:ElementRef;

  title = 'portal';
  count:number = 0;
  constructor(private renderer:Renderer2){

  }

  increaseCount(){
    this.count +=  10;
    this.createImage();
  }

  createImage(){
    const img1 = this.renderer.createElement("img");
    const img2 = this.renderer.createElement("img");

    this.renderer.setAttribute(img1,"src","/assets/img1.png");
    this.renderer.setAttribute(img2,"src","/assets/img2.png");
    this.renderer.setAttribute(img1,"alt","img1")
    this.renderer.setAttribute(img2,"alt","img2")
    this.renderer.setAttribute(img1,"height","30px");
    this.renderer.setAttribute(img2,"height","30px");
    this.renderer.addClass(img1,"img1");
    this.renderer.addClass(img2,"img2");

    const removeImage1 = () => {
      this.renderer.removeChild(this.imgContainer.nativeElement ,img1);

    }
    const removeImage2 = () => {
      this.renderer.removeChild(this.imgContainer.nativeElement ,img2);
    }
  
    this.renderer.listen(img1,'animationend',removeImage1);
    this.renderer.listen(img2,'animationend',removeImage2);

    this.renderer.appendChild(this.imgContainer.nativeElement , img1);
    this.renderer.appendChild(this.imgContainer.nativeElement , img2);
  } 
}
