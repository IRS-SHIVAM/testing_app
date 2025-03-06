import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopViewSukaComponent } from './top-view-suka.component';

describe('TopViewSukaComponent', () => {
  let component: TopViewSukaComponent;
  let fixture: ComponentFixture<TopViewSukaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopViewSukaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopViewSukaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
