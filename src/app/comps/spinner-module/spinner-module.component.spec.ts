import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerModuleComponent } from './spinner-module.component';

describe('SpinnerModuleComponent', () => {
  let component: SpinnerModuleComponent;
  let fixture: ComponentFixture<SpinnerModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
