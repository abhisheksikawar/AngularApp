import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyTwoComponent } from './dummy-two.component';

describe('DummyTwoComponent', () => {
  let component: DummyTwoComponent;
  let fixture: ComponentFixture<DummyTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
