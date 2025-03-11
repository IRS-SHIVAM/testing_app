import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftCameraSvgComponent } from './left-camera-svg.component';

describe('LeftCameraSvgComponent', () => {
  let component: LeftCameraSvgComponent;
  let fixture: ComponentFixture<LeftCameraSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftCameraSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftCameraSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
