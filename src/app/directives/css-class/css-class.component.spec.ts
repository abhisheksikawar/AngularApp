import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssClassComponent } from './css-class.component';

describe('CssClassComponent', () => {
  let component: CssClassComponent;
  let fixture: ComponentFixture<CssClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
