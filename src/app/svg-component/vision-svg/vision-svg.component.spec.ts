import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionSvgComponent } from './vision-svg.component';

describe('VisionSvgComponent', () => {
  let component: VisionSvgComponent;
  let fixture: ComponentFixture<VisionSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisionSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisionSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
