import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSvgComponent } from './panel-svg.component';

describe('PanelSvgComponent', () => {
  let component: PanelSvgComponent;
  let fixture: ComponentFixture<PanelSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
