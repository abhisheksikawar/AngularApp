import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumetwoComponent } from './consumetwo.component';

describe('ConsumetwoComponent', () => {
  let component: ConsumetwoComponent;
  let fixture: ComponentFixture<ConsumetwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumetwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
