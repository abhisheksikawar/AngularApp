import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumefakerestComponent } from './consumefakerest.component';

describe('ConsumefakerestComponent', () => {
  let component: ConsumefakerestComponent;
  let fixture: ComponentFixture<ConsumefakerestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumefakerestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumefakerestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
