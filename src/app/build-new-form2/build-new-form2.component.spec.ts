import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildNewForm2Component } from './build-new-form2.component';

describe('BuildNewForm2Component', () => {
  let component: BuildNewForm2Component;
  let fixture: ComponentFixture<BuildNewForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildNewForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildNewForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
