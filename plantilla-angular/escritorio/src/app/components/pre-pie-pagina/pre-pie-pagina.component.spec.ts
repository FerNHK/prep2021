import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrePiePaginaComponent } from './pre-pie-pagina.component';

describe('PrePiePaginaComponent', () => {
  let component: PrePiePaginaComponent;
  let fixture: ComponentFixture<PrePiePaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrePiePaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrePiePaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
