import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenDistritoMapaComponent } from './resumen-distrito-mapa.component';

describe('ResumenDistritoMapaComponent', () => {
  let component: ResumenDistritoMapaComponent;
  let fixture: ComponentFixture<ResumenDistritoMapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenDistritoMapaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenDistritoMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
