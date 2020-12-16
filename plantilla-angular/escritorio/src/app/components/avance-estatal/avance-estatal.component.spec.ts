import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvanceEstatalComponent } from './avance-estatal.component';

describe('AvanceEstatalComponent', () => {
  let component: AvanceEstatalComponent;
  let fixture: ComponentFixture<AvanceEstatalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvanceEstatalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvanceEstatalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
