import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mt15Component } from './mt15.component';

describe('Mt15Component', () => {
  let component: Mt15Component;
  let fixture: ComponentFixture<Mt15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mt15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mt15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
