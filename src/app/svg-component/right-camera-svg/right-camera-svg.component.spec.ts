import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightCameraSvgComponent } from './right-camera-svg.component';

describe('RightCameraSvgComponent', () => {
  let component: RightCameraSvgComponent;
  let fixture: ComponentFixture<RightCameraSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightCameraSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightCameraSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
