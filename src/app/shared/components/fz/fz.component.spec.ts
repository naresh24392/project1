import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FzComponent } from './fz.component';

describe('FzComponent', () => {
  let component: FzComponent;
  let fixture: ComponentFixture<FzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
