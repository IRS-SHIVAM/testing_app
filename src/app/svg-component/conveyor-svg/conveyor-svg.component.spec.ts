import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConveyorSvgComponent } from './conveyor-svg.component';

describe('ConveyorSvgComponent', () => {
  let component: ConveyorSvgComponent;
  let fixture: ComponentFixture<ConveyorSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConveyorSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConveyorSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
