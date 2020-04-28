import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fz25Component } from './fz25.component';

describe('Fz25Component', () => {
  let component: Fz25Component;
  let fixture: ComponentFixture<Fz25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fz25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fz25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
