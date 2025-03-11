import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorSvgComponent } from './motor-svg.component';

describe('MotorSvgComponent', () => {
  let component: MotorSvgComponent;
  let fixture: ComponentFixture<MotorSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
