import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaEstatalComponent } from './estadistica-estatal.component';

describe('EstadisticaEstatalComponent', () => {
  let component: EstadisticaEstatalComponent;
  let fixture: ComponentFixture<EstadisticaEstatalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticaEstatalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaEstatalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
