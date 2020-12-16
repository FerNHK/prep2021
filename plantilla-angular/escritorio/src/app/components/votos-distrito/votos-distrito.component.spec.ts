import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotosDistritoComponent } from './votos-distrito.component';

describe('VotosDistritoComponent', () => {
  let component: VotosDistritoComponent;
  let fixture: ComponentFixture<VotosDistritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotosDistritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotosDistritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
