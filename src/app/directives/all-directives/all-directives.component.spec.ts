import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDirectivesComponent } from './all-directives.component';

describe('AllDirectivesComponent', () => {
  let component: AllDirectivesComponent;
  let fixture: ComponentFixture<AllDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
