import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuSvgComponent } from './cpu-svg.component';

describe('CpuSvgComponent', () => {
  let component: CpuSvgComponent;
  let fixture: ComponentFixture<CpuSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpuSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpuSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
