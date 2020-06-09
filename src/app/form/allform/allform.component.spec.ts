import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllformComponent } from './allform.component';

describe('AllformComponent', () => {
  let component: AllformComponent;
  let fixture: ComponentFixture<AllformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
