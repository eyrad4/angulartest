import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildNewForm4Component } from './build-new-form4.component';

describe('BuildNewForm4Component', () => {
  let component: BuildNewForm4Component;
  let fixture: ComponentFixture<BuildNewForm4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildNewForm4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildNewForm4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
