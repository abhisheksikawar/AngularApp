import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeoneComponent } from './consumeone.component';

describe('ConsumeoneComponent', () => {
  let component: ConsumeoneComponent;
  let fixture: ComponentFixture<ConsumeoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
