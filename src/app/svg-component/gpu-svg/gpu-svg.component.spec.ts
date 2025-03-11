import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpuSvgComponent } from './gpu-svg.component';

describe('GpuSvgComponent', () => {
  let component: GpuSvgComponent;
  let fixture: ComponentFixture<GpuSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpuSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GpuSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
