import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxAndRadioButtonsComponent } from './checkbox-and-radio-buttons.component';

describe('CheckboxAndRadioButtonsComponent', () => {
  let component: CheckboxAndRadioButtonsComponent;
  let fixture: ComponentFixture<CheckboxAndRadioButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxAndRadioButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxAndRadioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
