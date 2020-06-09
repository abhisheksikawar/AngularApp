import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyOneComponent } from './dummy-one.component';

describe('DummyOneComponent', () => {
  let component: DummyOneComponent;
  let fixture: ComponentFixture<DummyOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
