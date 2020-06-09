import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TexteffectComponent } from './texteffect.component';

describe('TexteffectComponent', () => {
  let component: TexteffectComponent;
  let fixture: ComponentFixture<TexteffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TexteffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TexteffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
